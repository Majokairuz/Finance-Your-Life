import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView, Image } from 'react-native'
import axios from 'axios'
import { SafeAreaProvider } from "react-native-safe-area-context";
// Inputs
import Secundary from "../components/Inputs/InputSecundary";
import SelectInput from "../components/Inputs/Select_Input";
// Importar el componente de fecha
import Fecha from "../components/Inputs/Fecha";

// Butones
import Terciary from "../components/Botones/Terciary";
import Cuerpo_Boton from "../components/Botones/Cuerpo_Boton";
// Textos
import H1 from "../components/Titles/H1";
import Cuerpo from "../components/Titles/Cuerpo";
// Imagenes
import Google from "../assets/Google.png";
import Facebook from "../assets/Facebook.png";
import O from "../assets/O.png";

const SignIn = ({navigation}) => {
  //Estados para los campos
  const [Nombre, setNombre] = useState("");
  const [TipoDocumento, setTipoDocumento] = useState("");
  const [NumeroDocumento, setNumeroDocumento] = useState("");
  const [FechaNacimiento, setFechaNacimiento] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");

   const handleRegister = async () => {
     // Validación de campos vacios
     if (!Nombre || !TipoDocumento || !NumeroDocumento || !FechaNacimiento  || !Correo  || !Contraseña) {                    
       Alert.alert('Error', 'Todos los campos son obligatorios');
       return;
     }

      try {
         //Envio de datos al backend
        const response = await axios.post('http://0.0.0.0:8081/registro',{
         Nombre: Nombre,
         Tipo_Documento: TipoDocumento,
         Numero_Documento: NumeroDocumento,
         Fecha_Nacimiento: FechaNacimiento,
         Correo: Correo,
         Contraseña: Contraseña
       });

      if (response.status === 201) {
        Alert.alert("Exito", "Registro exitoso");
        navigation.navigate("Login");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Alert.alert("Alerta", "Usuario existente");
        navigation.navigate("Login");
      } else {
        alert("Error", error.message);
      }
    }
  };

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
              { label: "C.C", value: "cc" },
              { label: "T.I", value: "ti" },
              { label: "C.E", value: "ce" },
              { label: "P.A", value: "pa" },
              { label: "NIT", value: "nit" }, 
            ]}/>


          <Secundary
            placeholder="N. Doc:"
            value={NumeroDocumento}
            onChangeText={setNumeroDocumento}
            width="50%"
          />
        </View>

        <Fecha
          placeholder="Fecha de Nacimiento:"
          value={FechaNacimiento}
          onChange={setFechaNacimiento}
          maxDate={new Date()} // No permite fechas futuras
          width="100%"
          />

        <Secundary
          placeholder="Correo:"
          value={Correo}
          keyboardType="email-address"
          onChangeText={setCorreo}
          width={"100%"}
        />

        <Secundary
          placeholder="Contraseña:"
          value={Contraseña}
          onChangeText={setContraseña}
          secureTextEntry
          width={"100%"}
        />


        <Terciary texto="Registrarse" color="#FFFFFF" onPress={handleRegister}/>
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
