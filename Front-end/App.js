import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
// Navegacion
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Fuentes
import { useFonts } from "expo-font";
// Pantallas
import Bienvenida from "./screens/Bienvenida";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signin from "./screens/Signin";
import User_Dashboard from "./screens/User/Dashboard";
import Calendario from "./screens/User/Calendar";

// SplashScreen
import * as SplashScreen from "expo-splash-screen";
// Efectos
import { useEffect,useCallback } from "react";

const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="Dashboard"
          component={User_Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <Calendario/>
  );
}
