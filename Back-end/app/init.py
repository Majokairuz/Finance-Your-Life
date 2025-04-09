# Importa las herramientas principales de Flask para construir la API
from flask import Flask, request, jsonify
# Permite que tu backend pueda ser accedido desde otros dominios (por ejemplo, desde React Native)
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from .rutas import auth_bp
    app.register_blueprint(auth_bp)

    return app