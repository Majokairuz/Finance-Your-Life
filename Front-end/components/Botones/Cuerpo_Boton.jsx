import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Cuerpo_Boton = ({ texto, onPress,color }) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <Text style={[styles.texto, {color}] }>{texto}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    texto: {
        
        fontSize: 16, 
        fontFamily: 'PoppinsRegular', 
        fontWeight: '600', 
        wordWrap: 'break-word',
        textAlign:'center',
    }
})

export default Cuerpo_Boton;