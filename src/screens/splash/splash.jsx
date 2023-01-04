import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Loading } from "../../components/loading";
import { showToast } from "../../utils/helper";

function Splash({ navigation }) {
  const loadAfterTime = () => {
    showToast("success", "WELCOME", "bottom");
    navigation.replace("Login");
  };

  useEffect(() => {
    setTimeout(loadAfterTime, 3000);
  }, []);

  return (
    <View style={styles.mainCon}>
      <Loading />
    </View>
  );
}

export { Splash };

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
