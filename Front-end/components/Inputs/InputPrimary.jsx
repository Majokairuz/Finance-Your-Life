import { TextInput, View, StyleSheet } from 'react-native';

const InputPrimary = ({placeholder, value, onChangeText, keyboardType = 'default', SecureTextEntry,style, iconLeft, iconRight}) => {
    return(
      <TextInput style={styles.input} 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor="#D9D9D9"
        secureTextEntry={SecureTextEntry}
      />

    )

}
const styles = StyleSheet.create(
    {
    input:{
        width: '100%', 
            height: '60px',
            backgroundColor: '#5271FF', 
            borderRadius: 20,
            position: 'relative',
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            color: '#FFFFFF',
            fontSize:16,
            fontFamily: 'PoppinsMedium', 
            fontWeight: '500',
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)',

      
    }
}
)

export default InputPrimary;