from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash
from flask import current_app
from .utilidades import correo_valido, contraseña_segura

auth_bp = Blueprint('auth', __name__)

# Registro de usuarios
@auth_bp.route('/registro', methods=['POST'])
def registro():
    try:
        db = current_app.db #current_app objeto global de Flask que te permite acceder al app original (el que tiene app.db que se encuentra en __init__) dentro del contexto de una solicitud, es decir, cuando se ejecuta un endpoint.
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
           return jsonify({"error": "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula y un número"}), 400
        
        # Busca en la base de datos si ya existe un usuario con ese Documento
        existente = db.collection('usuarios').where('Numero_Documento', '==', data['Numero_Documento']).stream()
        # Si encuentra al menos uno, devuelve error de conflicto (409)
        if any(existente):
            return jsonify({"error": "Usuario ya existe"}), 409
        
        # Hashear la contraseña antes de guardarla
        data['Contraseña'] = generate_password_hash(data['Contraseña'])
        
         # Agrega el nuevo usuario a la colección 'usuarios' de Firestore
        db.collection('usuarios').add(data)
        return jsonify({"status": "success", "message": "Registro exitoso"}), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    
    # Registro de usuarios
# @auth_bp.route('/registro', methods=['POST'])
# def registro():
#     try:
#         data = request.json
#         db.collection('usuarios').add(data)
#         return jsonify({"status": "Registro exitoso"}), 201
#     except Exception as e:
#         return jsonify({"error": str(e)}), 400

# @auth_bp.route('/inicio',methods=['GET'])
# def inicio():
# @limiter.limit("5 per minute")  # Solo 5 intentos por minuto por IP
#     try:
#         Correo=request.args.get("Correo")
#         Contraseña=request.args.get("Contraseña")
#         if not Correo or not Contraseña:
#             return jsonify({"error": "Correo y Contraseña son requeridos"}), 400
        
#         usuario=list(db.collection('usuarios').where('Correo','==',Correo).where('Contraseña','==',Contraseña).stream())

#         if usuario:  
#             return jsonify({"status":"usuario encontrado","data":usuario[0].to_dict()}), 200
#         else:
#             return jsonify({"status":"Correo o contraseña no encontrados"}), 404
#     except Exception as e:
#         return jsonify({"error": str(e)}), 400