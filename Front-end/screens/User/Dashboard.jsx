import {View, Text, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Imagenes
import Logo_Soft from '../../assets/Soft_Nova.png'
// Textos
import Cuerpo from '../../components/Titles/Cuerpo'
// Iconos
import { Ionicons } from '@expo/vector-icons'
// Componentes
import H1 from "../../components/Titles/H1";
import H3 from "../../components/Titles/H3";
import Secundary from "../../components/Botones/Secundary";
import ButtonNaranja from '../../components/Botones/ButtonNaranja';
import ButtonVerde from '../../components/Botones/ButtonVerde';
// Barra de navegacion
import Navbar from "../Navbar/Navbar";
// grafica
import DonutChart from "../../components/Graficas/DonutChart";

const UserDashboard = ({navigation}) =>{

    return(
        <View style={styles.container}>
            <View style={styles.User}>
                <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                        <Image source={Logo_Soft} style={styles.logo_user}></Image>
                    <View style={{flexDirection: 'column', gap: 5, alignItems: 'flex-start'}}>
                        
                        <Cuerpo texto="Hola,"></Cuerpo>
                        <Cuerpo texto="Nico"></Cuerpo>
                    </View>
                </View>
                <Ionicons name="notifications-outline" size={30} color="#5271FF" />
            </View>
            {/* <View style={styles.container_grafica}>
                <DonutChart  title="Enero" ></DonutChart>
            </View> */}
            {/* <View style={styles.botons}>
                <Quarter texto="Inversion" width={50} name="stats-chart-outline" size={40} color="#FFFFFF"></Quarter>
                <Fifth texto="Noticias" width={50} name="stats-chart-outline" size={40} color="#FFFFFF"></Fifth>
            </View> */}
            <Secundary texto="Herramientas"></Secundary>

           
        <Navbar/>  

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: '100%', 
        backgroundColor: '#5271FF', 
        overflow: 'hidden', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        display: 'inline-flex',
        zIndex: 1,
    },
    User:{
        width: '100%',
         height: '15%', 
         padding: 20,
         paddingTop: 60, 
         backgroundColor: 'white',
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 10 },
         shadowOpacity: 0.25,
         shadowRadius: 10,
         elevation: 5,
         borderBottomRightRadius: 20, 
         borderBottomLeftRadius: 20, 
         flexDirection: 'row', 
         justifyContent: 'space-between', 
         alignItems: 'center', 
         display: 'flex'

    },
    logo_user:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    container_grafica:{
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    botons:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        padding: 20,
    }


});

export default UserDashboard;
