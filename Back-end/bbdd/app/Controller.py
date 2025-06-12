from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from flask import current_app
from .utilidades import correo_valido, contraseña_segura, enviar_correo, nombre_valido
from google.cloud.firestore_v1.base_query import FieldFilter
from datetime import datetime, timedelta
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
        requeridos_generales = ['Nombre', 'Tipo_Documento', 'Numero_Documento', 'Correo', 'Contraseña']
        
        # Verifica que todos los campos estén presentes y no estén vacíos
        if not all(field in data and data[field] for field in requeridos_generales):
           return jsonify({"Error": "Todos los campos son obligatorios."}), 400
        
        # Verificar que el nombre no sea por ejemplo jjj si no que sean nombres verdaderos
        if data ['Tipo_Documento'] != 'NIT': 
            if not nombre_valido(data['Nombre']):
                return jsonify({"error": "Nombre inválido.Debes poner al menos dos nombres reales."}), 400
        
        if data['Tipo_Documento'] == 'NIT':
            if 'Numero_Verificacion' not in data or not data['Numero_Verificacion']:
                return jsonify ({"error":"El campo de Numero de Verificacion es Obligatorio"}), 400
            
            try:
                data['Numero_Verificacion']=int(data['Numero_Verificacion'])
            except ValueError:
                return jsonify({"error":"Formato inválido en Número de Verificacion, ingresa solo numeros."}), 400
        
            if not (0 <= data['Numero_Verificacion'] <=9):
                return jsonify({"error":"Número de Verificacion inválido."}), 400
        
            if 'Fecha_Nacimiento' in data and data['Fecha_Nacimiento']:
                return jsonify({"error":"NIT no debe llevar fecha de nacimiento"}), 400
        else:
            if 'Fecha_Nacimiento' not in data or not data['Fecha_Nacimiento']:
                return jsonify({"error":"La Fecha de NAcimiento es obligatoria"}), 400
            if 'Numero_Verificacion' in data and data['Numero_Verificacion']:
                return jsonify({"error":"Solo NIT tiene numero de verificacion"}), 400
             # Conversión de Fecha Nacimiento a Timestamp
            try:
                fecha_local = datetime.strptime(data['Fecha_Nacimiento'], '%d-%m-%Y')  # Convertir string a datetime
            
                # Asumir que viene en hora local (ej. Colombia, UTC-5)
                zona_local = pytz.timezone('America/Bogota')  # Cambia según tu país
                fecha_con_tz = zona_local.localize(fecha_local)
            
                # Validar que tenga 18 años
                ahora = datetime.now (zona_local)
                edad_minima = ahora - timedelta(days=18*365.25)
                if fecha_con_tz > edad_minima:
                    return jsonify ({"error":"No tienes la edad permitida para el uso de la aplicación."}),400
            
                # Convertir a UTC antes de guardar
                data['Fecha_Nacimiento'] = fecha_con_tz.astimezone(pytz.utc)

            except ValueError:
                return jsonify({"error": "Formato inválido en Fecha de Nacimiento."}), 400
        
        # Conversión de Numero de Documento a Numero(INT)
        try:
            data['Numero_Documento'] = int(data['Numero_Documento'])  # Conversión a número entero
        except ValueError:
            return jsonify({"error":"Formato inválido en Número de Documento, ingresa solo numeros."}), 400
        
        # Poner un rango al campo para evitar numeros de documentos no existentes 
        if not (10_000_000 <= data['Numero_Documento'] <=9_000_000_000):
            return jsonify({"error":"Número de Documento inválido."}), 400
        
        # Verificar correo valido
        if not correo_valido(data['Correo']):
           return jsonify({"error":"Dirección de Correo Inválida, verificala."}), 400
        
        # Verificar contraseña segura
        if not contraseña_segura(data['Contraseña']):
           return jsonify({"error": "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula , un número y un caracter especial."}), 400

        # Busca en la base de datos si ya existe un usuario con ese Documento
        existente = any(db.collection('Usuarios').where(filter=FieldFilter('Numero_Documento', '==', data['Numero_Documento'] )).stream())

        # Verificar que informacion ya existe
        if existente:
            return jsonify({"error": "Ya tienes un usuario creado.Inicia Sesion"}), 409
        
        # Hashear la contraseña antes de guardarla
        data['Contraseña'] = generate_password_hash(data['Contraseña'])
        
        # Verificar que el usuario si sea el que este realizando el registro 
        # data['Verificado'] = False

        # Poner las primeras letras de cada nombre este en mayuscula 
        data['Nombre'] = data['Nombre'].strip().title()

        try:
            # Envia el correo con los datos descritos
            enviar_correo(data['Correo'], data['Nombre'])
            #Si no llega a encontrar el correo 
        except ValueError as ve:
            return jsonify({"error": str(ve)}), 400
        except Exception:
            return jsonify({"error": "Error al enviar el correo"}), 500
    
        # Agrega el nuevo usuario a la colección 'usuarios' de Firestore
        db.collection('Usuarios').add(data)
        return jsonify({"status": "success", "message": "Registro exitoso."}), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    


#Inicio de Sesion
@auth_bp.route('/inicio',methods=['POST'])
def inicio():
    try:
        # Current_app objeto global de Flask que te permite acceder al app original
        db = current_app.db
        # Obtiene los datos enviados por el cliente en formato JSON
        data=request.json
        # Define los campos obligatorios para el registro
        requeridos=['Correo', 'Contraseña']
        # Verifica que todos los campos estén presentes y no estén vacíos
        if not all(field in data and data[field] for field in requeridos):
           return jsonify({"error": "Todos los campos son requeridos"}), 400
        # Verificar correo valido
        if not correo_valido(data['Correo']):
            return jsonify({"error": "Correo inválido"}), 400
        # Buscar si existe un usuario con ese correo
        usuarios = db.collection('Usuarios').where(filter=FieldFilter('Correo', '==', data['Correo'] )).stream()
        usuario_doc = next(usuarios, None)

        # Verificar que se halla encontrado un usuario
        if not usuario_doc:
            return jsonify({"error": "Usuario no encontrado"}), 404
        
        usuario=usuario_doc.to_dict()

        # Verificar Contraseña
        if not check_password_hash(usuario['Contraseña'], data['Contraseña']):
            return jsonify({"error": "Contraseña incorrecta"}), 401
        
        # Retornar éxito y datos del usuario
        return jsonify({"status": "success","message": "Inicio de sesión exitoso",}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500