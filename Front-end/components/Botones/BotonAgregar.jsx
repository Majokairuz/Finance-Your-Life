import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const BotonAgregar = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.icono}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#4A6CF7', // azul similar
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    elevation: 5, // sombra en Android
    shadowColor: '#000', // sombra en iOS
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  icono: {
    fontSize: 32,
    color: 'white',
    lineHeight: 36,
  },
});

export default BotonAgregar;