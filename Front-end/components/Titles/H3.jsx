import { Text, StyleSheet } from 'react-native';

const H3 = ({texto,color})=> {
    return(
        <Text style={[styles.titulo_tres,{color}]}>{texto}</Text>
    )
}
const styles = StyleSheet.create({
    titulo_tres: {
        
        fontSize: 20, 
        fontFamily: 'PoppinsSemiBold', 
        fontWeight: '500', 
        wordWrap: 'break-word'
    }
})
export default H3;