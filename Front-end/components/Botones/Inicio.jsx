import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BotonSecundary = ({ texto, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.boton}>
      <Text style={styles.texto}>{texto}</Text>
      <Ionicons name="arrow-forward-outline" size={30} color="#000000" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  boton: {
    width: '100%', 
    height: '60px', 
    paddingLeft: 20, 
    paddingRight: 20, 
    paddingTop: 18, 
    paddingBottom: 18, 
    position: 'relative', 
    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  texto: {
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    color: "#000000",
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    fontWeight: "500",
    textTransform: "uppercase",
    wordWrap: "break-word",
  },
});
export default BotonSecundary;
