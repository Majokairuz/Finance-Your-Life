import { Text, StyleSheet } from 'react-native';

const H5 = ({texto})=> {
    return(
        <Text style={styles.titulo_cinco}>{texto}</Text>
    )
}
const styles = StyleSheet.create({
    titulo_cinco: {
        
        fontSize: 13, 
        fontFamily: 'PoppinsMedium', 
        fontWeight: '500', 
        wordWrap: 'break-word'
    }
})
export default H5;