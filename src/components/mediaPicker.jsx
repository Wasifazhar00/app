import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { BButton } from "./BButton";
import * as ImagePicker from "expo-image-picker";

function MediaPiker({ onClose, show, onCameraPressed, onImagePickerSelected }) {
  const pickImageFromGallery = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })
      .then((response) => {
        if (response.canceled) {
          alert("image not selected");
        } else {
          onImagePickerSelected(response.assets[0]);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <View>
      <Modal
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        animationOutTiming={1500}
        isVisible={show}
        style={{ justifyContent: "flex-end", flex: 1 }}
      >
        <View
          style={{
            height: "35%",
            backgroundColor: "pink",
            borderRadius: 10,
            padding: 10,
            justifyContent: "center",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              style={styles.circleView}
              onPress={onCameraPressed}
            >
              <Ionicons name={"camera-sharp"} size={50} color={"pink"} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.circleView}
              onPress={pickImageFromGallery}
            >
              <Ionicons name={"images-sharp"} size={50} color={"pink"} />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 10 }}>
            <BButton bbTitle="Close" onPress={onClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  circleView: {
    backgroundColor: "white",
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { MediaPiker };
