import { Camera, CameraType } from "expo-camera";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

function CustomCamera({ show, onClose, onPictureTaken }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();
  useEffect(() => {
    Camera.requestCameraPermissionsAsync();
  }, []);

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };
  const _takePicture = () => {
    if (cameraRef) {
      cameraRef.current
        .takePictureAsync()
        .then((response) => {
          onPictureTaken(response);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <View>
      <Modal
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        isVisible={show}
        style={{ justifyContent: "flex-end", flex: 1 }}
      >
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={toggleCameraType}>
              <Ionicons
                name="camera-reverse"
                size={50}
                style={{ color: "white" }}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name={"close-circle"} color={"white"} size={50} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.cameraButton}
              onPress={_takePicture}
            >
              <Ionicons name={"camera"} color={"white"} size={50} />
            </TouchableOpacity>
          </View>
        </Camera>
      </Modal>
    </View>
  );
}
export { CustomCamera };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cameraButton: {
    height: "90%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
