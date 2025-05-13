import { Text, StyleSheet } from 'react-native';

const Cuerpo = ({texto,color,fontSize,alert,marginBottom,textAlign})=> {
    return(
        <Text style={[styles.cuerpo,{color},{fontSize},{marginBottom},{textAlign:textAlign || 'center'},alert]}>{texto}</Text>
    )
}
const styles = StyleSheet.create({
    cuerpo: {
        backgroundColor: 'none',
        fontSize: 16, 
        fontFamily: 'PoppinsRegular', 
        fontWeight: '600', 
        wordWrap: 'break-word',
        textAlign:'center',
    }
})
export default Cuerpo;