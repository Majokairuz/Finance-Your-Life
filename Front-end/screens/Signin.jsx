import React, { useState } from 'react'
import { View, StyleSheet, Alert, ScrollView, Image } from 'react-native'
import axios from 'axios'
import { SafeAreaProvider } from "react-native-safe-area-context"
// Inputs
import Secundary from "../components/Inputs/InputSecundary"
import SelectInput from "../components/Inputs/Select_Input"
// Importar el componente de fecha
import Fecha from "../components/Inputs/Fecha"
// Contraseña
import Password from "../components/Inputs/Password"

// Butones
import CustomBoton from "../components/Botones/CustomButton"
import Cuerpo_Boton from "../components/Botones/Cuerpo_Boton"
// Textos
import H1 from "../components/Titles/H1"
import Cuerpo from "../components/Titles/Cuerpo"
// Imagenes
import Google from "../assets/Google.png"
import Facebook from "../assets/Facebook.png"
import O from "../assets/O.png"

const SignIn = ({navigation}) => {

  // Formato para la fecha
  const formatDate = (date) => {
  if (!date) return null;
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
  };
  //Estados para los campos
  const [Nombre, setNombre] = useState("")
  const [TipoDocumento, setTipoDocumento] = useState("")
  const [NumeroDocumento, setNumeroDocumento] = useState("")
  const [FechaNacimiento, setFechaNacimiento] = useState("")
  const [Correo, setCorreo] = useState("")
  const [Contraseña, setContraseña] = useState("")

  const handleRegister = async () => {
    // Validación de campos vacios
    if (!Nombre || !TipoDocumento || !NumeroDocumento || !FechaNacimiento  || !Correo  || !Contraseña) {                    
      Alert.alert('Error', 'Todos los campos son obligatorios')
      return
    }

    try{
      //Envio de datos al backend
      const response = await axios.post('http://192.168.1.39:8080/registro',{
        Nombre: Nombre,
        Tipo_Documento: TipoDocumento,
        Numero_Documento: NumeroDocumento,
        Fecha_Nacimiento: formatDate(FechaNacimiento),
        Correo: Correo,
        Contraseña: Contraseña
      })
      
      if (response.status === 201) {
        Alert.alert("Exito", "Tu usuario ha sido creado con exito, gracias por elegirnos.");
        navigation.navigate("Login");
      }
    } 

    catch (error) {
      if(error.response){ 
        const { status, data }= error.response
        const mensaje = data?.error || "";

        if (status === 400) {
          Alert.alert ("Error",mensaje)
          console.log(mensaje)
        }
        else if (status === 409) {
            Alert.alert("Error",mensaje)
            console.log(mensaje) 
        } 
        else if (status === 500) {
            Alert.alert("Error",mensaje)
            console.log(mensaje)
        }
        else {
        Alert.alert("Error", mensaje);
        console.log(mensaje)
        }
      }
      else{
        Alert.alert("Error", error.message);
        console.error("Error inesperado:", error);
      }
    }  
  }

  return (
  <SafeAreaProvider>
    <ScrollView style={styles.container}>
      <View style={styles.container_1}>
        <H1 texto="Registrarse" color="#FFFFFF" />
        <Cuerpo
          texto="Crea tu cuenta para empezar una vida financiera"
          color="#FFFFFF"
        />
      </View>
      
      <View style={styles.container_2}>
        <Secundary
          placeholder="Nombre Completo:"
          value={Nombre}
          onChangeText={setNombre}
          width={"100%"}
          contextMenuHidden={true}
          selectTextOnFocus={false}
        />


        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            
          }}
        >
          <SelectInput 
            value={TipoDocumento}
            onValueChange={(value) => setTipoDocumento(value)}
            placeholder="Tipo Doc:"
            width="50%"
            options={[
              { label: "C.C", value: "C.C" },
              { label: "C.E", value: "C.E" },
              { label: "NIT", value: "NIT" }, 
            ]}/>



          <Secundary
            placeholder="N. Doc:"
            value={NumeroDocumento}
            onChangeText={ (text)=> {const numeros = text.replace (/[^0-9]/g, '')
            setNumeroDocumento(numeros)}}
            width="50%"
            contextMenuHidden={true}
            selectTextOnFocus={false}
            keyboardType="numeric"
          />
        </View>

        <Fecha
          placeholder="Fecha de Nacimiento:"
          value={FechaNacimiento}
          onChange={setFechaNacimiento}
          maxDate={new Date()} // No permite fechas futuras
          width="100%"
          contextMenuHidden={true}
          selectTextOnFocus={false}
          />

        <Secundary
          placeholder="Correo:"
          value={Correo}
          keyboardType="email-address"
          onChangeText={setCorreo}
          width={"100%"}
          contextMenuHidden={true}
          selectTextOnFocus={false}
        />

        <Password
          placeholder="Contraseña:"
          value={Contraseña}
          onChangeText={setContraseña}
          secureTextEntry={true}
          width={"100%"}
          password={true}
          contextMenuHidden={true}
          selectTextOnFocus={false}
        />


        <CustomBoton texto="Registrarse" color="#FFFFFF" backgroundColor="#000000" onPress={handleRegister}/>
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
            marginBottom: 50,
          }}
        >
          <Cuerpo texto="Ya estas registrado? " fontSize={16} ></Cuerpo>
          <Cuerpo_Boton texto="Inicia Sesión" color="#5271FF" fontSize={16} onPress={() => navigation.navigate('Login')} ></Cuerpo_Boton>
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
    marginBottom: 0,
  },
  container_1: {
    width: "100%",
    height: "18%",
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

export  default SignIn;
