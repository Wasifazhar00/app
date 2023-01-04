import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Header({ title, onPress }) {
  return (
    <View style={styles.headerCon}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={"chevron-back"} size={24} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.textCon}>{title}</Text>
    </View>
  );
}
export { Header };

const styles = StyleSheet.create({
  headerCon: {
    paddingHorizontal: 10,
    height: 80,
    justifyContent: "space-between",
  },
  textCon: {
    fontSize: 24,
    fontWeight: "bold",
  },
  backIcon: {
    marginLeft: -9,
  },
});
