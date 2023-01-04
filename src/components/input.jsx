import { TextInput, StyleSheet } from "react-native";

function Input({ placeholder, secureTextEntry }) {
  return (
    <TextInput
      style={styles.inputCon}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    ></TextInput>
  );
}
export { Input };
const styles = StyleSheet.create({
  inputCon: {
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    borderWidth: 3,
  },
});
