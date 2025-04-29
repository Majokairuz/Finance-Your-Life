import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
// Titulos
import H1 from '../components/Titles/H1';
import Cuerpo from '../components/Titles/Cuerpo';
// Botones
import Primary from '../components/Botones/CustomButton'
const logo = require('../assets/Logo.png');


const  Home = ({navigation}) =>{
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.container1}>
        <H1 texto="Bienvenido" ></H1>
        <Cuerpo texto="Finance Your Life es la herramienta que necesitas para tomar el control de tus finanzas" fontSize={17}></Cuerpo>
        
        <Primary texto="Iniciar Sesión" textColor="#FFFFFF" onPress={() => navigation.navigate('Login')} />
        <Primary texto="Registrarse" onPress={() => navigation.navigate('Signin')} />
        
  
        </View>
        <StatusBar style="dark" />

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '100%', 
      height: '100%', 
      backgroundColor: '#5271FF', 
      flexDirection: 'column', 
      justifyContent: 'flex-end', 
      alignItems: 'center', 
      display: 'inline-flex'
      
    },
    logo:{
      width: 300, 
      height: 300, 
      borderRadius: 20, 
      justifyContent: 'center', 
      alignItems: 'center', 
      display: 'inline-flex',
    },
    container1: {
      width: '100%', 
      height: '45%', 
      borderRadius: 20, 
      justifyContent: 'center', 
      alignItems: 'center', 
      display: 'inline-flex', 
      backgroundColor: '#FFFFFF', 
      padding: 20,
      gap: 15,
      paddingBottom: 30,
    },

  
  });
  export default Home;