import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PasswordInput = ({ value, onChangeText, placeholder, width = "100%" }) => {
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={!mostrarContraseña}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#A3A3A3"
      />
      <TouchableOpacity onPress={() => setMostrarContraseña(!mostrarContraseña)}>
        <Ionicons
          name={mostrarContraseña ? 'eye' : 'eye-off'}
          size={24}
          color="#a3a3a3"
          style={{ marginRight: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: "#A3A3A3",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    padding: 20,
    fontFamily: "PoppinsMedium",
    fontWeight: "400",
  },
});

export default PasswordInput;