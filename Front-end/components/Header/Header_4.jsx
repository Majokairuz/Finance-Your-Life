import {TouchableOpacity, Text, View, StyleSheet,Image} from 'react-native';
import { Ionicons } from "@expo/vector-icons";



const Header_4 = ({texto}) => {
    return(
        <View style={styles.container}>
            <Ionicons name="person-circle-outline" size={40} color={'#000'}/>
            <Text style={styles.texto}> {texto}</Text>
        </View>

    )
}
const styles = StyleSheet.create(
    {
        container:{
            width:'100%',
            height: 'auto',
            paddingTop: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)', 
            borderBottomRightRadius: 20, 
            borderBottomLeftRadius: 20,

        },
        texto: {
            position: "relative",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            color: "#000000",
            fontSize: 20,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          },
          image_user:{
            width: 80,
            height: 80,
            borderRadius: 50,
            marginRight: 10,
          }
    }
);
export default Header_4;