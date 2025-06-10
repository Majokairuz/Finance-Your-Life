import re
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage
import os

def nombre_valido(nombre):
    # Quitar espacios sobrantes
    nombre = ' '.join(nombre.strip().split())

    # Verificar que haya al menos dos palabras
    palabras = nombre.split()
    if len(palabras) < 2:
        return False

    for palabra in palabras:
        # Solo letras permitidas (mayúsculas/minúsculas y acentos)
        if not re.fullmatch(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{2,}", palabra):
            return False

        # Evitar repeticiones excesivas de un solo carácter (ej: jjjj, aaa)
        if re.search(r"(.)\1{2,}", palabra):
            return False

        # Evitar palabras con 2 letras distintas repetidas (ej: jhjjhj, kakaka)
        if len(set(palabra)) <= 3 and len(palabra) >= 5:
            return False

        # Evitar combinaciones como "jjhh", "ppkk", etc.
        if re.fullmatch(r"([a-zA-ZñÑáéíóúÁÉÍÓÚ]{2})\1+", palabra):
            return False

    return True

def correo_valido(correo):
    return re.match(r"[^@]+@[^@]+\.[^@]+", correo)

def contraseña_segura(contraseña):
    if len(contraseña) < 8:
        return False
    if not re.search(r"[A-Z]", contraseña):  # Al menos una mayúscula
        return False
    if not re.search(r"[a-z]", contraseña):  # Al menos una minúscula
        return False
    if not re.search(r"[0-9]", contraseña):  # Al menos un número
        return False
    if not re.search(r"[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>/?]", contraseña):  # Caracter especial
        return False
    return True

def enviar_correo(destinatario, nombre_usuario):
    remitente = os.getenv("MAIL_USERNAME")
    app_password = os.getenv("MAIL_APP_PASSWORD")
    
    mensaje = MIMEMultipart()
    mensaje['From'] = remitente
    mensaje['To'] = destinatario
    mensaje['Subject'] = "Creacion de cuenta - Finance Your Life"

    cuerpo = f"""
    <html>
    <body>
        <p>Hola <strong>{nombre_usuario}</strong>,</p>
        <p>Has creado una cuenta en <strong>Finance Your Life</strong>.</p>
        <p>Estamos contentos de que hallas preferido nuestra aplicacion.</p>

        <p>Si no hiciste este registro, te invitamos a que respondas este correo.</p>

        <p>Atentamente,El equipo de SoftNova</p>
        
        <img src="cid:logo_softnova" alt="Logo" width="150">
    </body>
    </html>
    """
    mensaje.attach(MIMEText(cuerpo, 'html'))

    ruta_actual = os.path.dirname(os.path.abspath(__file__)) 
    ruta_logo = os.path.abspath(os.path.join(ruta_actual, '../../../Front-end/assets/Favicon-Transparente.png'))
    if os.path.exists(ruta_logo):
        with open(ruta_logo, 'rb') as f:
            imagen = MIMEImage(f.read())
            imagen.add_header('Content-ID', '<logo_softnova>')
            mensaje.attach(imagen)
    else:
        print(f"logo no encontrado, {ruta_logo}")
    
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as servidor:
            servidor.login(remitente, app_password)
            servidor.send_message(mensaje)
    except Exception as e:
        print(" Error al enviar correo:", e)
        raise e
    