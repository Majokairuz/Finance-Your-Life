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
import User_Dashboard from "./screens/User/Dashboard";
import Calendar from "./screens/User/Calendar";
import Ingresos from "./screens/User/Ingresos";
// CSS
import "./global.css"
import DashboardScreen from "./screens/User/Dashboard";



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
  


  return (
  // <SafeAreaProvider>
  //   <NavigationContainer>
  //     <StatusBar style="auto"/>
  //     <Stack.Navigator initialRouteName="Bienvenida">
  //       <Stack.Screen
  //         name="Bienvenida"
  //         component={Bienvenida}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="Home"
  //         component={Home}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="Login"
  //         component={Login}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="Signin"
  //         component={Signin}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="Dashboard"
  //         component={User_Dashboard}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="Calendar"
  //         component={Calendar}
  //         options={{ headerShown: false }}
  //       />

  //     </Stack.Navigator>
  //   </NavigationContainer>
  // </SafeAreaProvider>
  // <Ingresos />
  <DashboardScreen/>
  )
}
