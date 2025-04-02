import {View, Text, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Imagenes
import Logo_Soft from '../../assets/Soft_Nova.png'
// Textos
import Cuerpo from '../../components/Titles/Cuerpo'
// Iconos
import { Ionicons } from '@expo/vector-icons'
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
        display: 'inline-flex'
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
    }


});

export default UserDashboard;
