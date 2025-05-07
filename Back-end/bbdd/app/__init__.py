# Importa las herramientas principales de Flask para construir la API
from flask import Flask
# Permite que tu backend pueda ser accedido desde otros dominios (por ejemplo, desde React Native)
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Cargar las variables de entorno desde secret_key.env
dotenv_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '.env'))
load_dotenv(dotenv_path)

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    #Establecer secret jey desde el archivo .env
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    if not app.config['SECRET_KEY']:
        raise RuntimeError("SECRET_KEY no está definido en el archivo .env")
    
    # NO INICIA LA BASE DE DATOS SI NO SE PUEDE CONECTAR A FIREBASE
    try:
        from .firebase import inicio_firebase
        app.db=inicio_firebase()
    except RuntimeError as e:
        print(e)
        exit(1)

    from .Controller import auth_bp
    app.register_blueprint(auth_bp)

    return app

#El nombre de __init__ es para que python lo reconozca como paquete, si solo dejamos la palabra sin los dos guiones al piso, no funciona el back no encuentra el archivo