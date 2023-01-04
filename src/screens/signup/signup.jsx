import Checkbox from "expo-checkbox";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Header } from "../../components/header";
import { BButton } from "../../components/BButton";
import { colors } from "../../utils/theme";
import { LinearGradient } from "expo-linear-gradient";
import { CustomCamera } from "../../components/customCamera";
import { Loading } from "../../components/loading";
import { MediaPiker } from "../../components/mediaPicker";
import { showToast } from "../../utils/helper";
import { firebase } from "../../services/firebaseConfig";

function Signup({ navigation }) {
  const goToLogin = () => {
    navigation.navigate("Login");
  };
  const imageSource = require("../../../assets/images/pink.png");
  const [isChecked, setChecked] = useState(false);
  const [isCameraShown, setIsCameraShown] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [isPikerShown, setIsPikerShown] = useState(false);
  const [imageFromCamera, setImageFromCamera] = useState();
  const [imageFromPiker, setImageFromPiker] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onImagePressed = () => {
    setIsPikerShown(!isPikerShown);
  };
  const onImageCameFromGallery = (image) => {
    setImageFromPiker(image.uri);
    setIsPikerShown(false);
  };
  const onSignupPress = () => {
    console.log(email, password);
    setShowLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((authResponse) => {
        showToast("success", "registered successfully proceed to login", "top");
      })
      .catch((authError) => {
        setShowLoading(false);
        showToast("error", "authError.message", "top");
      });
  };
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <LinearGradient
          colors={["rgba(255,255,255,0.8)", "transparent"]}
          style={styles.background}
        />
        <Header title={"Signup"}></Header>
        <TouchableOpacity onPress={onImagePressed}>
          <View style={styles.pickImgCircle}>
            <Image
              source={{ uri: imageFromPiker || imageFromCamera }}
              height={100}
              width={100}
              borderRadius={50}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.textContainer}> SignUp</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={"First Name"}
          onChange={setFirstName}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder={"Last Name"}
          onChange={setLastName}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder={"Email"}
          onChange={setEmail}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder={"Password"}
          secureTextEntry={true}
          onChange={setPassword}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder={"Confirm Password"}
          secureTextEntry={true}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox
            style={styles.cheCon}
            color={colors.white}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={{ color: "red" }}>Aceept the Terms and Conditions</Text>
        </View>
        <BButton bbTitle={"Signup"} onPress={onSignupPress} />
        <BButton
          bbTitle="Open Camera"
          onPress={() => {
            setIsCameraShown(!isCameraShown);
          }}
        />

        <CustomCamera
          show={isCameraShown}
          onClose={() => setIsCameraShown(false)}
          onPictureTaken={(response) => {
            setIsCameraShown(false);
            setIsPikerShown(false);
            setImageFromCamera(response.uri);
          }}
        />
      </View>

      {showLoading === false && <Loading />}
      <MediaPiker
        show={isPikerShown}
        onClose={onImagePressed}
        onCameraPressed={() => {
          setIsCameraShown(!isCameraShown);
        }}
        onImagePickerSelected={(imageSelected) => {
          onImageCameFromGallery(imageSelected);
        }}
      />
    </ScrollView>
  );
}
export default Signup;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 20, backgroundColor: "pink" },
  textContainer: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "white",
  },
  inputContainer: {
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    borderWidth: 3,
  },
  logoContainer: {
    height: 100,
    width: 100,
    alignSelf: "center",
    margin: 10,
    borderRadius: 10,
  },
  cheCon: {
    margin: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  pickImgCircle: {
    backgroundColor: "pink",
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
