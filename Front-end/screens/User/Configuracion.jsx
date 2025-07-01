import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header/Header_4';
import Cuerpo from '../../components/Titles/Cuerpo';

// Inputs
import InputSecundary_2 from '../../components/Inputs/InputSecundary_2'
import InputSecundary_3 from '../../components/Inputs/InputSecundary_3'

// Botones
import CustomButton from '../../components/Botones/CustomButton'

const UserProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Encabezado */}
      <Header texto={'Perfil de Usuario'}/>
      

      {/* Campos de perfil */}
      <View style={{gap:'30', display:'flex', flexDirection:'column', paddingRight:20, paddingLeft:20, paddingTop:20, paddingBottom:40, color:'#fff'}}>
      <InputSecundary_2 label={'Nombre'} value={'Maria Jose'}/>
      <InputSecundary_3 label={'Tipo de Doc'} value={'C.C'}/>
      <InputSecundary_3 label={'N.Doc'} value={'123456789'}/>
      <InputSecundary_3 label={'Fecha de Nacimiento'} value={'20/05/2000'}/>
      <InputSecundary_2 label={'Email'} value={'Correo@gmail.com'}/>
      <InputSecundary_2 label={'Contraseña'} value={'*********'}/>
     
      {/* Texto de privacidad */}
      <Cuerpo texto={'En Finance Your Life protegemos tus datos personales'} color={'#fff'}>
      </Cuerpo>
      </View>

      {/* Botón cerrar sesión */}  
      <View>
      <CustomButton texto={'CERRAR SESIÓN'} backgroundColor={'#fff'} color={'#ff5151'} />
      </View>
    </ScrollView>
  );
};

const ProfileField = ({ label, value }) => (
  <TouchableOpacity style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.valueRow}>
      <Text style={styles.value}>{value}</Text>
      <Feather name="chevron-right" size={20} color="#AAA" />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5271FF',
    minHeight: '100%',
    alignItems: 'center',
  },

  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    width: '100%',
    marginBottom: 14,
    elevation: 2,
  },
  label: {
    fontSize: 12,
    color: '#666',
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  value: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    marginVertical: 20,
    textAlign: 'center',
    width: '90%',
  },
  logoutButton: {
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  logoutText: {
    color: 'red',
    fontWeight: '700',
  },
});

export default UserProfile;