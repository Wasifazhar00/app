import { StyleSheet, Image, ScrollView, Text } from "react-native";
import { BButton } from "../../components/BButton";
import { Input } from "../../components/input";
import { Header } from "../../components/header";
import { LinearGradient } from "expo-linear-gradient";
import { TextButton } from "../../components/textButton";

function Login({ navigation }) {
  const goToSignup = () => {
    navigation.navigate("Signup");
  };
  const goToMain = () => {
    navigation.navigate("main");
  };
  const imageSource = require("../../../assets/images/pink.png");
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <LinearGradient
        colors={["rgba(255,255,255,0.8)", "transparent"]}
        style={styles.background}
      />
      <Header title={"Login"} onPress={goToSignup}></Header>
      <Image
        style={styles.logoContainer}
        source={imageSource}
        resizeMode={"center"}
      />
      <Text style={styles.textContainer}>Login</Text>
      <Input placeholder={"User Name"} />
      <Input placeholder={"Password"} secureTextEntry={true} />
      <BButton bbTitle={"Login"} onPress={goToMain} />
      <TextButton title={"Don't have an account yet!"} onPress={goToSignup} />
    </ScrollView>
  );
}
export default Login;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 20, backgroundColor: "pink" },
  textContainer: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "white",
  },
  logoContainer: {
    height: 100,
    width: 100,
    alignSelf: "center",
    margin: 10,
    borderRadius: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
