from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash
from flask import current_app
from .utilidades import correo_valido, contraseña_segura, generar_token, verificar_token, enviar_correo
from google.cloud.firestore_v1.base_query import FieldFilter
from datetime import datetime
import pytz

auth_bp = Blueprint('auth', __name__)

# Registro de usuarios
@auth_bp.route('/registro', methods=['POST'])

def registro():
    try:
        #current_app objeto global de Flask que te permite acceder al app original (el que tiene app.db que se encuentra en __init__) dentro del contexto de una solicitud, es decir, cuando se ejecuta un endpoint.
        db = current_app.db 
        
        # Obtiene los datos enviados por el cliente en formato JSON
        data = request.json
    
        # Define los campos obligatorios para el registro
        requeridos = ['Nombre', 'Tipo_Documento', 'Numero_Documento', 'Fecha_Nacimiento', 'Correo', 'Contraseña']

        # Verifica que todos los campos estén presentes y no estén vacíos
        if not all(field in data and data[field] for field in requeridos):
           return jsonify({"error": "Todos los campos son requeridos"}), 400
        
        # Verificar correo valido
        if not correo_valido(data['Correo']):
           return jsonify({"error": "Correo inválido"}), 400
        
        # Verificar contraseña segura
        if not contraseña_segura(data['Contraseña']):
           return jsonify({"error": "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula , un número y un caracter especial"}), 400
        
        # Conversión de Numero de Documento a Numero(INT)
        try:
            data['Numero_Documento'] = int(data['Numero_Documento'])  # Conversión a número entero
        except ValueError:
            return jsonify({"error": "Formato inválido en Número de Documento"}), 400
        
        # Poner un rango al campo para evitarnumeros de documentos no existentes 
        if not (50_000_000 <= data['Numero_Documento'] <=2_000_000_000):
            return jsonify({"error":"Documento invalido"})
        
        # Conversión de Fecha Nacimiento a Timestamp
        try:
            fecha_local = datetime.strptime(data['Fecha_Nacimiento'], '%d-%m-%Y')  # Convertir string a datetime
            # Asumir que viene en hora local (ej. Colombia, UTC-5)
            zona_local = pytz.timezone('America/Bogota')  # Cambia según tu país
            fecha_con_tz = zona_local.localize(fecha_local)
            # Convertir a UTC antes de guardar
            data['Fecha_Nacimiento'] = fecha_con_tz.astimezone(pytz.utc)
        except ValueError:
            return jsonify({"error": "Formato inválido en Fecha de Nacimiento"}), 400
        
        # Busca en la base de datos si ya existe un usuario con ese Documento
        existente = db.collection('Usuarios').where(filter=FieldFilter('Numero_Documento', '==', data['Numero_Documento'] )).stream() 
        
        # Si encuentra al menos un numero de documento igual
        if any(existente):
            return jsonify({"error": "Numero de documento ya existe"}), 409
        
        # Busca en la base de datos si ya existe un usuario con ese Documento:
        existenteC = db.collection('Usuarios').where(filter=FieldFilter('Correo', '==', data['Correo'] )).stream()

        # Si encuentra al menos un correo igual
        if any(existenteC):
            return jsonify({"error": "Correo ya existe"}), 409

        # Hashear la contraseña antes de guardarla
        data['Contraseña'] = generate_password_hash(data['Contraseña'])
        
        # Verificar que el usuario si sea el que este realizando el registro 
        data['Verificado'] = False

        # Agrega el nuevo usuario a la colección 'usuarios' de Firestore
        db.collection('Usuarios').add(data)

        # Genera el token con el correo del usuario, usando la clave de la aplicacion 
        token = generar_token(data['Correo'], current_app.config['SECRET_KEY'])
        
        # Envia el correo con los datos descritos
        enviar_correo(data['Correo'], data['Nombre'], token)

        return jsonify({"status": "success", "message": "Registro exitoso. Verifica tu correo para continuar."}), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    
# Verificar que el token se active
@auth_bp.route('/verificar',methods=['GET'])

def verificar():

    # Obtiene el token que viene como parámetro en la URL
    token = request.args.get('token')

    try:
        # Funcion para verificar que el token sea valido y no halla expirado
        correo = verificar_token(token, current_app.config['SECRET_KEY'])
        
        # Current_app objeto global de Flask que te permite acceder al app original
        db = current_app.db

        # Busca los usuarios que contengan el mismo correo, el cual deberia ser solo uno
        usuarios = db.collection('Usuarios').where('Correo', '==', correo).stream()

        # Por cada usuario encontrado actualiza el campo de verificado
        for usuario in usuarios:
            datos_usuario = usuario.to_dict()
            if datos_usuario.get('Verificado', True):
                return jsonify({"status": "error", "message": "El correo ya ha sido verificado anteriormente."}), 400
            else:
                usuario.reference.update({'Verificado': True})
                return jsonify({"status": "success", "message": "Correo verificado exitosamente."})
                
    
    except Exception as e:
        return jsonify({"error": "Token invalido o expirado"}), 400

    
#Inicio de Sesion
# @auth_bp.route('/inicio',methods=['POST'])