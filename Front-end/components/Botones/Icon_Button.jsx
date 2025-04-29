import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { Ionicons } from "@expo/vector-icons";


const Icon_Button = ({texto, onPress, color,backgroundColor,iconColor,size,name,width}) => {
    return(
        <TouchableOpacity onPress={onPress} style={[styles.primary,{backgroundColor: backgroundColor || '#5271FF'}, {width: width || '100%'}]}>
            <Ionicons name={name} size={size} color={iconColor} />
            <Text style={[styles.texto, {color: color || '#FFFFFF'}]}>{texto}</Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create(
    {
        primary:{
            width: '100%',
            height: '60px',
            borderRadius: 20,
            position: 'relative',
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)',
            
        },
        texto:{
            width: '100%',
            position: 'relative', 
            textAlign: 'center', 
            justifyContent: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            fontSize: 16, 
            fontFamily: 'PoppinsMedium', 
            fontWeight: '500', 
            textTransform: 'uppercase', 
            wordWrap: 'break-word',
        
         },
    }
);
export default Icon_Button;