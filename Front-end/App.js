import { StatusBar } from "expo-status-bar";

// Navegacion
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Fuentes
import { useFonts } from "expo-font";
// Pantallas
import Bienvenida from "./screens/Bienvenida";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signin from "./screens/Signin";
import MainApp from "./screens/MainApp";
// CSS
import "./global.css"

import * as Linking from 'expo-linking';
import { Alert } from 'react-native'; // Para mostrar mensajes al usuario
import { useRef } from "react"; // useRef nos permite manejar la navegación fuera del JSX



const Stack = createStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Ocultar splash screen cuando las fuentes estén listas
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const navigationRef=useRef()

  const linking={
    prefixes:['localhost://'], // Esquema base. El link que abrirá la app empezará así
    config:{
      screens:{
        Login: 'Login', // Mapear localhost://Login a la pantalla Login (opcional)
        Signin: 'Signin'
      }
    }
  };

  useEffect(()=>{ //Efecto para escuchar y manejar link

    //Funcion para verificar con el backend
    const verificarToken = async (token) => {
      try{
        const link = await fetch (`http://localhost:8081/verificar?token=${token}`) //Llama el backend enviando el token
        const data = await link.json() //Espera la respuesta JSON
        // Verifica el status y asi mismo devuelve una respuesta
        if (data.status === "sucess"){
          Alert.alert("Exito","Correo Verificado exitosamente")
          NavigationContainerRefContext.current?.navigate ("Login")
        } else {
          Alert.alert("Error", data.message || "Token invalido o expirado")
          NavigationContainerRefContext.current?.navigate ("Signin")
        }
      }
      catch(error){
        Alert.alert("Error", "No se pudo conectar al servidor")
        NavigationContainerRefContext.current?.navigate ("Signin")
      } 
    }

    const handleDeepLink = ({url})=>{
      const parsed= Linking.parse(url) //Parsea o analiza  la url
      if (parsed?.path === "verificar" && parsed.queryParams?.token){
        verificarToken(parsed.queryParams.token) // Si es un link de verificacion, lo procesamos
      }
    }
  
    const setupLinking = async () => {
      const initialUrl = await Linking.getInitialURL() //obtiene el link con el que se abrio la app
      if (initialUrl){
        handleDeepLink({ url:initialUrl}) //Se procesa
      }
  
      const subscription= Linking.addEventListener('url', handleDeepLink)
      return () => subscription.remove () // Se limpia cuando el componenete se desmonta
    }
  
    setupLinking() //Se ejecuta la logica al montar la app
  }, [])

  
  


  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer ref={navigationRef} linking={linking}>
        <StatusBar style="auto"/>
        <Stack.Navigator initialRouteName="Bienvenida">
          <Stack.Screen
            name="Bienvenida"
            component={Bienvenida}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          />
          {/* Cuando logueas exitosamente, vas a MainApp */}
          <Stack.Screen 
            name="MainApp" 
            component={MainApp} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
