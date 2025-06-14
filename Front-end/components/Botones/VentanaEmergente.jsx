import React from 'react';
import {Modal,View,Text,TouchableOpacity,StyleSheet,} from 'react-native';

const ModalConfirmacion = ({ visible, onAceptar, onCancelar, mensaje }) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.text}>{mensaje}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onAceptar} style={styles.btnAceptar}>
              <Text style={styles.textAceptar}>ACEPTAR</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onCancelar} style={styles.btnCancelar}>
              <Text style={styles.textCancelar}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmacion;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  btnAceptar: {
    backgroundColor: '#5271FF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnCancelar: {
    backgroundColor: '#000',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textAceptar: {
    color: '#fff',
    fontWeight: '600',
  },
  textCancelar: {
    color: '#fff',
    fontWeight: '600',
  },
});