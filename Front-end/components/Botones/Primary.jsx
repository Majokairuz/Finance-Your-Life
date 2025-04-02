import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const BotonPrimary = ({texto, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.primary}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create(
    {
        primary:{
            width: '100%', 
            height: '60px',
            backgroundColor: '#5271FF', 
            borderRadius: 20,
            position: 'relative',
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            color: '#FFFFFF',
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)',
            
        },
        texto:{
            position: 'relative', 
            textAlign: 'center', 
            justifyContent: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            color: '#FFFFFF', 
            fontSize: 16, 
            fontFamily: 'PoppinsMedium', 
            fontWeight: '500', 
            textTransform: 'uppercase', 
            wordWrap: 'break-word',
        
         },
    }
);
export default BotonPrimary;