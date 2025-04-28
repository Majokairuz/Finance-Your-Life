import { TextInput, View, StyleSheet } from "react-native";

const InputSecondary= ({
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  SecureTextEntry,
  style,
  iconLeft,
  iconRight,
  width
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholderTextColor="#A3A3A3"
      secureTextEntry={SecureTextEntry}
      width={width}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: "60px",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    position: "relative",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    color: "#000000",
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    fontWeight: "400",
    borderWidth: 1,
    borderColor: "#A3A3A3",

  },
});

export default InputSecondary;
