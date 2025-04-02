import { TextInput, View, StyleSheet } from "react-native";

const InputPrimary = ({
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
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    position: "relative",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    color: "#000000",
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    fontWeight: "500",
    boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)",
  },
});

export default InputPrimary;
