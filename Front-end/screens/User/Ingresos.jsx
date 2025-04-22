import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import "../../global.css"

/**
 * Componente para ingresar uno o varios ingresos mensuales con NativeWind (Tailwind CSS para React Native).
 */
const IncomeForm = () => {
  const [incomes, setIncomes] = useState([
    { amount: "", category: "Salario" },
  ]);

  const categories = ["Salario", "Comisiones", "Freelance", "Otros"];

  const handleAddIncome = () => {
    setIncomes([...incomes, { amount: "", category: "Salario" }]);
  };

  const handleInputChange = (index, field, value) => {
    const newIncomes = [...incomes];
    newIncomes[index][field] = value;
    setIncomes(newIncomes);
  };

  const handleSave = () => {
    console.log("Ingresos guardados:", incomes);
  };

  return (
    <ScrollView className="flex-1 bg-[#5B6EFF] px-6 pt-12 pb-4">
      <Text className="text-white text-xl font-semibold mb-2">👋 Hola, Majo</Text>
      <Text className="text-white text-3xl font-bold mb-6">Ingresos</Text>

      {incomes.map((income, index) => (
        <View key={index} className="mb-6">
          <TextInput
            className="bg-white rounded-lg p-3 mb-4"
            placeholder="Monto mensual: $"
            keyboardType="numeric"
            value={income.amount}
            onChangeText={(value) => handleInputChange(index, "amount", value)}
          />

          <Text className="text-white font-medium mb-2">Selecciona una categoría:</Text>
          <View className="flex-row flex-wrap gap-2 mb-2">
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                className={`px-4 py-2 rounded-full ${income.category === cat ? "bg-white" : "bg-blue-300"}`}
                onPress={() => handleInputChange(index, "category", cat)}
              >
                <Text className={`font-medium ${income.category === cat ? "text-black" : "text-white"}`}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <TouchableOpacity
        className="bg-[#F59390] py-3 rounded-xl mb-4 items-center"
        onPress={handleAddIncome}
      >
        <Text className="text-white font-bold">+ ¿AÑADIR OTRO INGRESO?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-white py-3 rounded-xl items-center flex-row justify-center"
        onPress={handleSave}
      >
        <Text className="font-semibold text-black mr-2">GUARDAR INGRESO</Text>
        <Ionicons name="arrow-forward" size={20} color="black" />
      </TouchableOpacity>

      <Text className="text-white text-xs mt-6">
        En Finance Your Life, protegemos tu privacidad. Tus datos no serán compartidos con terceros y solo se usarán para mejorar tu experiencia.
      </Text>
    </ScrollView>
  );
};

export default IncomeForm;
