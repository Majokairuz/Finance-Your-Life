from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, firestore

# Inicializar Flask
app = Flask(__name__)
CORS(app)  # Permitir CORS para la conexión con React

# Configurar Firebase
try:
 cred = credentials.Certificate("./Back-end/conexion.json")  # Asegúrate de colocar tu archivo JSON
 firebase_admin.initialize_app(cred)
 db = firestore.client()
 print("Base de datos inicializada")

except Exception as e:
    print(f"Error al inicializar la base de datos: {e}")


# Registro de usuarios
@app.route('/registro', methods=['POST'])
def registro():
    try:
        data = request.json
        db.collection('usuarios').add(data)
        return jsonify({"status": "Registro exitoso"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/inicio',methods=['GET'])
def inicio():
    try:
        Correo=request.args.get("Correo")
        Contraseña=request.args.get("Contraseña")
        if not Correo or not Contraseña:
            return jsonify({"error": "Correo y Contraseña son requeridos"}), 400
        
        usuario=list(db.collection('usuarios').where('Correo','==',Correo).where('Contraseña','==',Contraseña).stream())

        if usuario:  
            return jsonify({"status":"usuario encontrado","data":usuario[0].to_dict()}), 200
        else:
            return jsonify({"status":"Correo o contraseña no encontrados"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(host='192.168.1.43', port=8081, debug=True)



