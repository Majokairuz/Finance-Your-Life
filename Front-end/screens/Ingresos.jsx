import { useState } from 'react'
import { View, Text, TextInput,  TouchableOpacity,  StyleSheet,  Alert,  Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useUser } from '../context/UserContext'

const Ingresos = () => {
  const { usuario } = useUser()

  const [Monto, setMonto] = useState('')
  const [Categoria, setCategoria] = useState('')
  const [ModalVisible, setModalVisible] = useState(false)
  const [Loading, setLoading] = useState(false)

  const navigation = useNavigation()
  
  //Reseteo de los inputs
  const resetFormulario = () => {
    setMonto("")
    setCategoria("")
    setModalVisible(false)
    setLoading(false)
  }

  // // Eliminacion de informacion al retornar
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     resetFormulario()
  //   })
  //   return unsubscribe
  // }, [navigation])

  const categorias = ['Salario', 'Comisiones', 'Freelance', 'Otros']

  const handleGuardar = () => {
    if (Loading) return

    if (!Monto || !Categoria) {
      Alert.alert('Error','Completa todos los campos')
      return;
    }
    setLoading(true)
    setModalVisible(true) // Mostrar el modal de confirmación

  //   try{
  //     const response= await axios.post('http://192.168.1.39:8080/registro',{
  //       Monto:Monto,
  //       Fecha:Fecha,
  //       Categoria: Categoria,
  //       Descripcion: Descripcion,
  //       Recurrencia:Recurrencia,
  //     },{timeout: 5000})
  //   }
  //   catch{
  //     Alert.alert 
  //   }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.saludo}>
          👋 Hola,<Text style={styles.nombre}>{usuario?.nombre}</Text>
        </Text>
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
              Categoria === cat && styles.botonActivo,
            ]}
            onPress={() => setCategoria(cat)}
          >
            <Text style={styles.textoBoton}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.botonGuardar} onPress={handleGuardar} loading={Loading} disabled={Loading}>
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
        visible={ModalVisible}
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