import { Text, StyleSheet } from 'react-native';

const Boton = ({texto})=> {
    return(
        <Text style={styles.Boton}>{texto}</Text>
    )
}
const styles = StyleSheet.create({
    titulo_dos: {
        
        fontSize: 16, 
        fontFamily: 'PoppinsMedium', 
        fontWeight: '500', 
        wordWrap: 'break-word',
        textTransform: 'uppercase',
    }
})
export default Boton;