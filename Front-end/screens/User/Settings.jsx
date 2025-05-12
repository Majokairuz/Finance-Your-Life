import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// Header
import Header_2 from '../../components/Header/Header_2';
// Botones
import Icons_Button from '../../components/Botones/Icons_Button';
const Settings = () => {
    return (
        <View style={styles.container}>
            <Header_2 texto="Nombre de usuario"></Header_2>
            <View style={styles.container2}>
            <Icons_Button texto="Perfil de usuario" backgroundColor="#5EC57E" name="person-circle-outline"  iconColor="#FFFFFF"  />
            <Icons_Button texto="Preferencias financieras" backgroundColor="#F4A79D" name="star-outline"  iconColor="#FFFFFF"  />
            <Icons_Button texto="Apariencia y experiencia" backgroundColor="#FF9359" name="color-filter-outline"  iconColor="#FFFFFF"  />
            <Icons_Button texto="Seguridad y privacidad" backgroundColor="#FA898B" name="accessibility-outline"  iconColor="#FFFFFF"  />
            <Icons_Button texto="Otras opciones" backgroundColor="#FFFFFF" name="alert-circle-outline" iconColor="#000000" color="#000000"  />
            </View>
        </View>
    );
    }
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#5271FF',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    container2:{
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        gap: 20,
    },
});
export default Settings;