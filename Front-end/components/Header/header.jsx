import {TouchableOpacity, Text, View, StyleSheet,Image} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import softNova from '../../assets/Soft_Nova.png';


const Header = ({texto}) => {
    return(
        <View style={styles.container}>
            <Image source={softNova} style={styles.image_user}></Image>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center'}}>
            <Text style={styles.texto}>Hola,</Text>
            <Text style={styles.texto}>{texto}</Text>
            </View>
            <TouchableOpacity>
                <Ionicons name="notifications-outline" size={40} color="#5271FF" />
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create(
    {
        container:{
            width:'100%',
            height: 'auto',
            paddingTop: 60,
            display: 'flex',
            flexDirection: 'row',
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
            fontSize: 16,
            fontFamily: "PoppinsMedium",
            fontWeight: "500",
            wordWrap: "break-word",
          },
          image_user:{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
          }
    }
);
export default Header;