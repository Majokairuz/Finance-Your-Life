# Importa las herramientas principales de Flask para construir la API
from flask import Flask
# Permite que tu backend pueda ser accedido desde otros dominios (por ejemplo, desde React Native)
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    # NO INICIA LA BASE DE DATOS SI NO SE PUEDE CONECTAR A FIREBASE
    try:
        from .firebase import inicio_firebase
        app.dp=inicio_firebase()
    except RuntimeError as e:
        print(e)
        exit(1)

    from .rutas import auth_bp
    app.register_blueprint(auth_bp)

    return app

#El nombre de __init__ es para que python lo reconozca como paquete, si solo dejamos la palabra sin los dos guiones al piso, no funciona el back no encuentra el archivo