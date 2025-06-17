
import {View,StyleSheet,Alert,Image,ScrollView} from "react-native"
import { useEffect, useState } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import axios from 'axios'
import { useUser } from '../context/UserContext'
// Input
import Secundary from "../components/Inputs/InputSecundary"
import Password from "../components/Inputs/Password"
// Butones
import CustomButton from "../components/Botones/CustomButton"
import Cuerpo_Boton from "../components/Botones/Cuerpo_Boton"
// Textos
import H1 from "../components/Titles/H1"
import Cuerpo from "../components/Titles/Cuerpo"

// Imagenes
import Google from "../assets/Google.png"
import Facebook from "../assets/Facebook.png"
import O from "../assets/O.png"

const Login = ({navigation}) => {

  const { setUsuario } = useUser()
  //Estados para los campos
  const [Correo, setCorreo] = useState("")
  const [Contraseña, setContraseña] = useState("")
  const [Loading, setLoading] = useState(false)
  
  //Reseteo de los inputs
  const resetFormulario = () => {
    setCorreo("")
    setContraseña("")
    setLoading(false)
  }

  // Eliminacion de informacion al retornar
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      resetFormulario()
    })
    return unsubscribe
  }, [navigation])
    
  const handleLogin = async () => {

    if (Loading) return

    // Validación de campos vacios
    if (!Correo || !Contraseña) {
      Alert.alert("Error", "Completa todos los campos")
      return
    }

    setLoading(true)

    try {
      const response = await axios.post("http://192.168.137.239:8080/Inicio",{
          Correo: Correo,
          Contraseña: Contraseña,
        },{ timeout: 5000 })

      if (response.status === 200) {
        const { redirigir_a, usuario } = response.data
        setUsuario({ nombre: usuario.Nombre })
        resetFormulario()

        if (redirigir_a === "dashboard") {
          navigation.navigate("MainApp")
        } else if (redirigir_a === "Ingresos") {
          navigation.navigate("Ingresos")
        } else {
          Alert.alert("Error", "Ruta de redirección no reconocida.")
        }
      }
    } 
    catch (error) {
      if (error.response) {
        const { status, data } = error.response
        const mensaje = data?.error || ""

        if (status === 400 ) {
          Alert.alert("Error", mensaje)
        } 
          else if (status === 404 ) {
            Alert.alert("Error",mensaje )
            navigation.navigate("Signin")
          } 
          else if (status === 401 ) {
            Alert.alert("Error", mensaje)
          } 
          else if (status === 409 ) {
            Alert.alert("Error", mensaje)
            navigation.navigate("Home")
          } 
        else {
          Alert.alert("Error", mensaje )
        }
      } 
      else {
        Alert.alert("Error")
        console.error("Error inesperado:", error)
      }
    } finally{
      setLoading(false)
    }
  }
  
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
          value={Correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          autoCapitalize="none"
          width={"100%"}
        ></Secundary>

        <Password 
          placeholder="Contraseña:"
          value={Contraseña}
          onChangeText={setContraseña}
          SecureTextEntry={true}
          width={"100%"}
          password={true}
        ></Password>

        <Cuerpo_Boton
          texto="Olvidaste tu contraseña?"
          color="#000000"
        ></Cuerpo_Boton>

        <CustomButton texto="Iniciar Sesión" color="#FFFFFF" backgroundColor="#000000" onPress={handleLogin} loading={Loading} disabled={Loading}></CustomButton> 

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
