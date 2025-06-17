import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// header
import Header_3 from "../components/Header/Header_3";
// Titulos
import H1 from "../components/Titles/H1";
import H3 from "../components/Titles/H3";
import H4 from "../components/Titles/H4";
import Cuerpo from "../components/Titles/Cuerpo";
// Inputs
import Secundary from "../components/Inputs/InputSecundary";
// Botones
import Custom_Button from "../components/Botones/CustomButton";
import Button_Icon_Right from "../components/Botones/Button_Icon_Right";

// Formato de moneda
const formatearMoneda = (valor) => {
  const limpio = valor.replace(/\D/g, ""); // eliminar todo lo que no sea número
  if (!limpio) return "";
  return `$ ${new Intl.NumberFormat("es-CO").format(parseInt(limpio))}`;
};
// Categorias
const Gastos = () => {
  const [monto, setMonto] = useState("");
  const [Descripción, setDescripción] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  // Modal
  const handleGuardar = () => {
    if (!monto || !Descripción) {
      Alert.alert("Completa todos los campos");
      return;
    }

    // Aquí podrías guardar el ingreso a Firebase antes del modal

    setModalVisible(true); // Mostrar el modal de confirmación
  };

  return (
    <View style={styles.container}>
      <Header_3 texto={"majo"}></Header_3>
      <View style={styles.container_2}>
        <H1 texto={"Gastos"} color={"#FFFFFF"}></H1>

        <Secundary
          placeholder="Monto mensual: $"
          keyboardType="numeric"
          value={formatearMoneda(monto)}
          onChangeText={(texto) => setMonto(texto.replace(/\D/g, ""))}
          width={"100%"}
        />
        <Secundary
          placeholder={"Descripción"}
          value={Descripción}
          onChangeText={(texto) => setDescripción(texto)}
          width={"100%"}
        />

        <Button_Icon_Right texto={"Guardar Gasto"} onPress={handleGuardar} />

        <Cuerpo
          texto={
            "En Finance Your Life, protegemos tu privacidad. Tus datos no serán compartidos con terceros y solo se usarán para mejorar tu experiencia."
          }
          color={"#FFFFFF"}
        />
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <H3 texto={"¿Deseas ingresar otro Gasto?"}></H3>
            <View
              style={[
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: 10,
                  marginTop: 30,
                },
              ]}
            >
              <Custom_Button
                onPress={() => {
                  setModalVisible(false);
                  setMonto("");
                  setCategoria("");
                }}
                texto={"Aceptar"}
                width={"50%"}
              />

              <Custom_Button
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Gastos");
                }}
                texto={"Cancelar"}
                backgroundColor={"#000000"}
                color={"#FFFFFF"}
                width={"50%"}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5271FF",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container_2: {
    width: "100%",
    height: "80%",
    paddingTop: 30,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },

  categoriasContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 32,
    gap: 10,
  },
  modalContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 16,
    alignItems: "center",
    width: "95%",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#5271FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Gastos;
