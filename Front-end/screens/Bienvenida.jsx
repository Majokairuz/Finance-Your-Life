import {View, StyleSheet,Image,TouchableOpacity} from 'react-native';
import Cuerpo from '../components/Titles/Cuerpo'
import Logo from '../assets/Logo.png'
import { useEffect } from 'react';

const Welcome = ({navigation}) =>{
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            navigation.replace('Home')
        }, 3000)
        return () => clearTimeout
    })
    return(
        <TouchableOpacity>
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            {/* <Inicio texto="continuar" onPress={() => navigation.navigate('Home')}/> */}
            <View style={styles.titulo}>
            <Cuerpo texto='Domina tus finanzas y alcanza tus metas' color='#FFF' fontSize={16}></Cuerpo>
            </View>

        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: '100%', 
        paddingLeft: 40, 
        paddingRight: 40, 
        paddingTop: 50, 
        paddingBottom: 50,
        backgroundColor: '#5271FF', 
        overflow: 'hidden', 
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        gap: 75, 
        display: 'inline-flex' 
    },
    logo:{
        width: 300,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
    },
    titulo:{
        width:'80%',
    }
});
export default Welcome;
