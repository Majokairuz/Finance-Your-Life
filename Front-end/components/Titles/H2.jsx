import { Text, StyleSheet } from 'react-native';

const H2 = ({texto,color})=> {
    return(
        <Text style={[styles.titulo_dos,color={color} || '#000000']}>{texto}</Text>
    )
}
const styles = StyleSheet.create({
    titulo_dos: {
        
        fontSize: 24, 
        fontFamily: 'Poppins_500Medium', 
        fontWeight: '500', 
        wordWrap: 'break-word'
    }
})
export default H2;