import React, { useState } from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,KeyboardAvoidingView,Platform,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Textos
import H1 from "../components/Titles/H1";
import H5 from "../components/Titles/H5";
import Header from '../components/Header/header';
import InputSecondary from '../components/Inputs/InputSecundary';

// Botones
import Button_Icon_Right from '../components/Botones/Button_Icon_Right';

const GastoForm = ({ userName = "Majo" }) => {
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');

  const handleGuardar = () => {
    // Aquí puedes manejar el guardado del gasto
    console.log({ descripcion, monto });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      {/* Saludo */}
     <Header texto={"Usuario"}></Header>

      {/* Título */}
      <H1 texto={"Gastos"}></H1>

      {/* Formulario */}
      <InputSecondary
        placeholder="Descripción del gasto:"
        placeholderTextColor="#999"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      {/* Selector genérico */}
      <View style={styles.circleSelector} />

      <InputSecondary
        placeholder="Monto del gasto:"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={monto}
        onChangeText={setMonto}
      />

      {/* Botón */}
      <Button_Icon_Right texto={'Continuar'}></Button_Icon_Right>

      {/* Texto de privacidad */}
      <H5 texto={"En Finance Your Life, protegemos tu privacidad. Tus datos no serán compartidos con terceros y solo se usarán para mejorar tu experiencia."}></H5>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5271FF',
    padding: 20,
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  saludo: {
    fontSize: 18,
    color: '#000',
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginVertical: 10,
  },
  circleSelector: {
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#ccc',
    borderRadius: 35,
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 14,
  },
  privacyText: {
    fontSize: 11,
    color: '#fff',
    marginTop: 30,
    textAlign: 'center',
  },
});

export default GastoForm;