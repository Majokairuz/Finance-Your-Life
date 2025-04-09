import re

def correo_valido(correo):
    return re.match(r"[^@]+@[^@]+\.[^@]+", correo)

def contraseña_segura(contraseña):
    if len(contraseña) < 8:
        return False
    if not re.search(r"[A-Z]", contraseña):
        return False
    if not re.search(r"[a-z]", contraseña):
        return False
    if not re.search(r"[0-9]", contraseña):
        return False
    return True