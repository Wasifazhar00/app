import { Text, TouchableOpacity, StyleSheet } from "react-native";

function TextButton({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.opacityCon} onPress={onPress}>
      <Text style={styles.textCon}>{title}</Text>
    </TouchableOpacity>
  );
}
export { TextButton };

const styles = StyleSheet.create({
  textCon: {
    fontSize: 15,
    fontWeight: "bold",
    color: "red",
    alignSelf: "flex-end",
  },
  opacityCon: {
    margin: 10,
  },
});
