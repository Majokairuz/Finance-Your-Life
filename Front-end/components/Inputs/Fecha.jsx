import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Ionicons } from '@expo/vector-icons';

/**
 * Componente reutilizable para seleccionar una fecha.
 *
 * Props:
 * @param {string} label - El texto que aparece como etiqueta del input.
 * @param {Date|null} value - La fecha seleccionada actualmente (puede ser null).
 * @param {function} onChange - Función que se ejecuta al seleccionar una fecha. Obligatoria.
 * @param {Date} maxDate - Fecha máxima que se puede seleccionar (opcional).
 *
 * Ejemplo de uso:
 * 
 * const [birthDate, setBirthDate] = useState(null);
 * 
 * <DateInput 
 *    label="Fecha de nacimiento"
 *    value={birthDate}
 *    onChange={setBirthDate}
 *    maxDate={new Date()}
 * />
 */

const DateInput = ({ label, value, onChange = () => {}, maxDate }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Abrir el picker
  const handleShowDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // Cerrar el picker
  const handleHideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Confirmar fecha seleccionada
  const handleConfirm = (date) => {
    setDatePickerVisibility(false);
    onChange(date);
  };

  return (
    <View >
      {/* Etiqueta */}
      <Text style={styles.label}>{label}</Text>

      {/* Campo de selección */}
      <TouchableOpacity
        style={styles.input}
        onPress={handleShowDatePicker}
      >
        <View style={styles.row}>
          <Text style={[styles.inputText, !value && styles.placeholderText]}>
            {value ? value.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Selecciona una fecha'}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Modal de selección de fecha */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={handleHideDatePicker}
        maximumDate={maxDate}
        display='inline'
        locale="es-ES"
        headerTextIOS="Selecciona una fecha"
        confirmTextIOS="Confirmar"
        cancelTextIOS="Cancelar"
        date={value || new Date()} // Si no hay fecha seleccionada, muestra la fecha actual
        style={{ width: '100%' }} // Asegúrate de que el modal ocupe todo el ancho
        textColor="#000000" // Cambia el color del texto del modal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: "60px",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    position: "relative",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    color: "#000000",
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    fontWeight: "400",
    borderWidth: 1,
    borderColor: "#A3A3A3",
    marginTop: -20,
  },
  label: {
    fontSize: 16,
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    color: '#A3A3A3',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    width: '100%',
    fontSize: 16,
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    color: '#000000',
  },
  placeholderText: {
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    color: '#A3A3A3',
  },
});

export default DateInput;