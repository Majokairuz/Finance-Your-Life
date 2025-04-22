import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// Botones
import ButtonRosado from "../../components/Botones/ButtonRosado";
import ButtonSecundary from "../../components/Botones/Secundary";

// Titulos
import H2 from "../../components/Titles/H2";
import H3 from "../../components/Titles/H3";
import H4 from "../../components/Titles/H4";
import H5 from "../../components/Titles/H5";
import Cuerpo from "../../components/Titles/Cuerpo";
// Inputs
import InputSecundary from "../../components/Inputs/InputSecundary";

/**
 * Componente para ingresar uno o varios ingresos mensuales.
 * Permite seleccionar una categoría para cada ingreso y añadir múltiples ingresos dinámicamente.
 */
const IncomeForm = () => {
  const [incomes, setIncomes] = useState([
    { amount: "", category: "Salario" },
  ]);

  const categories = ["Salario", "Comisiones", "Freelance", "Otros"];

  /**
   * Añade un nuevo ingreso vacío al array de ingresos.
   */
  const handleAddIncome = () => {
    setIncomes([...incomes, { amount: "", category: "Salario" }]);
  };

  /**
   * Maneja los cambios de texto en los inputs.
   * @param {number} index - Índice del ingreso a modificar.
   * @param {string} field - Campo a modificar ("amount" o "category").
   * @param {string} value - Nuevo valor.
   */
  const handleInputChange = (index, field, value) => {
    const newIncomes = [...incomes];
    newIncomes[index][field] = value;
    setIncomes(newIncomes);
  };

  /**
   * Función de ejemplo para guardar ingresos (actualmente imprime en consola).
   */
  const handleSave = () => {
    console.log("Ingresos guardados:", incomes);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>👋 Hola, Majo</Text>
      <Text style={styles.header}>Ingresos</Text>

      {incomes.map((income, index) => (
        <View key={index} style={styles.incomeBlock}>
          <TextInput
            style={styles.input}
            placeholder="Monto mensual: $"
            keyboardType="numeric"
            value={income.amount}
            onChangeText={(value) => handleInputChange(index, "amount", value)}
          />

          <Text style={styles.label}>Selecciona una categoría:</Text>
          <View style={styles.categoryContainer}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.categoryButton,
                  income.category === cat && styles.categorySelected,
                ]}
                onPress={() => handleInputChange(index, "category", cat)}
              >
                <Text style={income.category === cat ? styles.categoryTextSelected : styles.categoryText}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={handleAddIncome}>
        <Text style={styles.addButtonText}>+ ¿AÑADIR OTRO INGRESO?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>GUARDAR INGRESO</Text>
        <Ionicons name="arrow-forward" size={20} color="black" style={{ marginLeft: 8 }} />
      </TouchableOpacity>

      <Text style={styles.privacyText}>
        En Finance Your Life, protegemos tu privacidad. Tus datos no serán compartidos con terceros y solo se usarán para mejorar tu experiencia.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B6EFF',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 16,
  },
  greeting: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  incomeBlock: {
    marginBottom: 24,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  label: {
    color: 'white',
    fontWeight: '500',
    marginBottom: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#93a7ff',
    marginRight: 8,
    marginBottom: 8,
  },
  categorySelected: {
    backgroundColor: 'white',
  },
  categoryText: {
    color: 'white',
    fontWeight: '500',
  },
  categoryTextSelected: {
    color: 'black',
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: '#F59390',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: 'black',
    fontWeight: '600',
  },
  privacyText: {
    color: 'white',
    fontSize: 12,
    marginTop: 24,
  },
});

export default IncomeForm;
