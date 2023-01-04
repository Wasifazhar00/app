import AnimatedLottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function Loading() {
  return (
    <View style={styles.mainCon}>
      <AnimatedLottieView
        source={require("../../assets/animations/Loading-animation 1.json")}
        autoPlay
        loop
      />
    </View>
  );
}
export { Loading };

const styles = StyleSheet.create({
  mainCon: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
  },
});
