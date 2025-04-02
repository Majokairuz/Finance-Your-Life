import { Text, StyleSheet } from 'react-native';

const H4 = ({texto})=> {
    return(
        <Text style={styles.titulo_cuatro}>{texto}</Text>
    )
}
const styles = StyleSheet.create({
    titulo_cuatro: {
        
        fontSize: 15, 
        fontFamily: 'PoppinsRegular', 
        fontWeight: '500', 
        wordWrap: 'break-word'
    }
})
export default H4;