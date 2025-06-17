import {TouchableOpacity, Text, View, StyleSheet, ActivityIndicator} from 'react-native';

const BotonPrimary = ({texto, onPress, title, loading, disabled,color,backgroundColor,width}) => {
    const isDisabled = disabled || loading;
    return(
        <TouchableOpacity onPress={onPress} disabled={isDisabled} style={[styles.primary,{backgroundColor: backgroundColor || '#5271FF'}, {width: width || '100%'}]}>
            {loading ? (<ActivityIndicator color={color || '#FFFFFF'}/>):(<Text style={[styles.texto, {color: color || '#FFFFFF'}]}>{texto}</Text>)}
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
export default BotonPrimary;