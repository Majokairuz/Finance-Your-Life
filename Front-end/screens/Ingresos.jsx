import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Ingresos = () => {
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const categorias = ['Salario', 'Comisiones', 'Freelance', 'Otros'];

  const handleGuardar = () => {
    if (!monto || !categoria) {
      Alert.alert('Completa todos los campos');
      return;
    }

    // Aquí podrías guardar el ingreso a Firebase antes del modal

    setModalVisible(true); // Mostrar el modal de confirmación
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.saludo}>👋 Hola, Majo</Text>
      </View>

      <Text style={styles.titulo}>Ingresos</Text>

      <TextInput
        style={styles.input}
        placeholder="Monto mensual: $"
        keyboardType="numeric"
        value={monto}
        onChangeText={setMonto}
      />

      <Text style={styles.subtitulo}>Selecciona una categoría:</Text>
      <View style={styles.categorias}>
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.botonCategoria,
              categoria === cat && styles.botonActivo,
            ]}
            onPress={() => setCategoria(cat)}
          >
            <Text style={styles.textoBoton}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.botonGuardar} onPress={handleGuardar}>
        <Text style={styles.textoGuardar}>GUARDAR INGRESO →</Text>
      </TouchableOpacity>

      <Text style={styles.privacidad}>
        En Finance Your Life, protegemos tu privacidad. Tus datos no serán
        compartidos con terceros y solo se usarán para mejorar tu experiencia.
      </Text>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¿Deseas ingresar otro ingreso?</Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
                setMonto('');
                setCategoria('');
              }}
            >
              <Text style={styles.modalButtonText}>Aceptar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#ccc' }]}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('Gastos');
              }}
            >
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5271FF',
    flex: 1,
    padding: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    width: '100%',
    marginBottom: 32,
    alignItems: 'center',
  },
  saludo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  titulo: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 12,
    borderRadius: 10,
    marginBottom: 24,
    fontSize: 16,
  },
  subtitulo: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 32,
  },
  botonCategoria: {
    backgroundColor: '#819CFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  botonActivo: {
    backgroundColor: '#FFFFFF',
  },
  textoBoton: {
    color: '#000',
    fontWeight: '500',
  },
  botonGuardar: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 30,
  },
  textoGuardar: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  privacidad: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 'auto',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 16,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#5271FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Ingresos;