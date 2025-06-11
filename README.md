# 💰 Finance Your Life

**Finance Your Life** es una app móvil para la gestión financiera personal que permite registrar ingresos, gastos, ahorros e inversiones. Además, incluye una inteligencia artificial que brinda recomendaciones personalizadas sobre en qué invertir.

## 🧠 Características principales

- Registro de ingresos, gastos y ahorros
- Panel de control financiero en tiempo real
- Calendario con vencimientos
- Recomendaciones de inversión con IA
- Autenticación con email, Google y Facebook

## 📱 Stack Tecnológico

|       Frontend      |     Backend      | Base de datos |         IA           |
|---------------------|------------------|---------------|----------------------|
| React Native (Expo) | Python (FastAPI) |   Firebase    | Entrenamiento propio |

## 🗂️ Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- `finance-your-life-app/`: Aplicación móvil desarrollada en React Native con Expo.
- `finance-your-life-backend/`: Backend desarrollado con Flask y una IA integrada para recomendaciones financieras.

---
## 📱 Frontend – React Native + Expo

```bash
finance-your-life-app/
│
├── assets/                       # Imágenes, íconos, fuentes
│
├── components/                   # Componentes reutilizables
│   ├── CustomButton.js
│   ├── InputField.js
│   └── Card.js
│
├── screens/                      # Pantallas principales
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   ├── DashboardScreen.js
│   ├── CalendarScreen.js
│   └── InvestmentScreen.js
│
├── navigation/                   # Lógica de navegación
│   └── AppNavigator.js
│
├── services/                     # Llamadas al backend
│   ├── api.js
│   └── authService.js
│
├── context/                      # Contextos de React (Auth, App State)
│   └── AuthContext.js
│
├── App.js                        # Punto de entrada de la app
├── app.json                      # Configuración de Expo
└── package.json                  # Dependencias

## 📱 Backend Flask + Firebase + IA
```bash
finance-your-life-backend/
│
├── bbdd/                        # Carpeta principal de la app
│   ├── app/             # Inicializa la app Flask                  
│      ├── __init__.py
│      ├── Controller.py         #Logica del proyecto
│      ├── firebase.py           # Conexion con la base de datos
│      └── Utilidades.py         # Verificacion del correo y contraseña   
│   ├── conexion.json            # Archivo json clave Firebase
│   ├── requiriments.txt
│   └── run.py                        # Punto de entrada principal  
└── ia/                       # Lógica de IA
│       ├── investment_ai.py      # Modelo o recomendaciones
│       └── recommender.py           # Dependencias

## 🚀 Instalación rápida
### Clona el repositorio
```bash
git clone https://github.com/tu-usuario/finance-your-life.git



### Frontend
```bash
cd frontend
npm install
npx expo start

### Backend
cd backend
cd bbdd
pip install -r requeriments.txt


