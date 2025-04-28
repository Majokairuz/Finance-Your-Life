
import {View,StyleSheet,Button,Image,ScrollView} from "react-native";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";

// Input
import Secundary from "../components/Inputs/InputSecundary";
// Butones
import Terciary from "../components/Botones/Terciary";
import Cuerpo_Boton from "../components/Botones/Cuerpo_Boton";
// Textos
import H1 from "../components/Titles/H1";
import Cuerpo from "../components/Titles/Cuerpo";
// Iconos
import { Ionicons } from "@expo/vector-icons";
// Imagenes
import Google from "../assets/Google.png";
import Facebook from "../assets/Facebook.png";
import O from "../assets/O.png";

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaProvider>
    <ScrollView style={styles.container}>
      <View style={styles.container_1}>
        <H1 texto="Iniciar Sesión" color="#FFFFFF"></H1>
        <Cuerpo
          texto="Da el primer paso hacia una vida financiera sin preocupaciones."
          color="#FFFFFF"
          fontSize={17}
        ></Cuerpo>
      </View>
      <View style={styles.container_2}>
        <Secundary
          placeholder="Correo:"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          width={"100%"}
        ></Secundary>
        <Secundary
          placeholder="Contraseña:"
          type={password}
          onChangeText={setPassword}
          SecureTextEntry={true}
          width={"100%"}
        ></Secundary>

        <Cuerpo_Boton
          texto="Olvidaste tu contraseña?"
          o onPress={() => navigation.navigate('Calendar')}
          color="#000000"
        ></Cuerpo_Boton>

        <Terciary texto="Iniciar Sesión" color="#FFFFFF"></Terciary>
        <View style={styles.o}>
          <Image source={O}></Image>
        </View>
        <View style={styles.iconos}>
          <View style={styles.icon}>
            <Image source={Facebook} style={styles.icono} />
          </View>
          <View style={styles.icon}>
            <Image source={Google} style={styles.icono} />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Cuerpo
            texto="No estás registrado? "
            fontSize={16}
          ></Cuerpo>
          <Cuerpo_Boton
            texto="Registrate Aqui"
            color="#5271FF"
            fontSize={16}
            onPress={() => navigation.navigate('Signin')}
          ></Cuerpo_Boton>
        </View>
      </View>
    </ScrollView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#5271FF",
    flexDirection: "column",
  },
  container_1: {
    width: "100%",
    height: "30%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
    background: "#5271FF",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    display: "inline-flex",
  },
  container_2: {
    width: "100%",
    height: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 60,
    paddingBottom: 60,
    backgroundColor: "#FFFFFF",
    boxShadow: "5px -10px 10px rgba(0, 0, 0, 0.25)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
    display: "inline-flex",
  },
  iconos: {
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    width: 60,
    height: 60,
    background: "white",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: 9999,
  },
  icono: {
    width: 40,
    height: 40,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10,
  },
});

export default Login;

