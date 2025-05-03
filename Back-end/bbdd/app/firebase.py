# Importa Firebase Admin SDK para conectar con Firebaseimport firebase_admin
import firebase_admin
# Importa métodos específicos de Firebase para autenticarse y conectarse a Firestore
from firebase_admin import credentials, firestore

def inicio_firebase():
   try:
    # Carga las credenciales desde un archivo JSON (debes haberlo descargado de Firebase)
      cred = credentials.Certificate("conexion.json")  
    # Inicializa la app de Firebase con las credenciales
      firebase_admin.initialize_app(cred)
      print("Base de datos inicializada")
    # Retorna un cliente para interactuar con Firestore (la base de datos de Firebase) 
      return firestore.client()

   except Exception as e:
    # No iniciar flask si no se puede conectar a Firebase
      raise  RuntimeError(f"Error al inicializar la base de datos: {e}")

