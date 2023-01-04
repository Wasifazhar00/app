import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { colors } from "../utils/theme";

function BButton({ onPress, bbTitle = "Title" }) {
  return (
    <TouchableOpacity style={styles.bbCon} onPress={onPress}>
      <Text style={{ color: "white" }}>{bbTitle}</Text>
    </TouchableOpacity>
  );
}
export { BButton };
const styles = StyleSheet.create({
  bbCon: {
    backgroundColor: "rgba(255,255,255,0.3)",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
  },
});
