import { Text, StyleSheet } from 'react-native';

const H3 = ({texto})=> {
    return(
        <Text style={styles.titulo_tres}>{texto}</Text>
    )
}
const styles = StyleSheet.create({
    titulo_tres: {
        
        fontSize: 20, 
        fontFamily: 'Poppins_500Medium', 
        fontWeight: '500', 
        wordWrap: 'break-word'
    }
})
export default H3;