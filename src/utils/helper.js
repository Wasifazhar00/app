import { Toast } from "react-native-toast-message/lib/src/Toast";

function showToast(toastType, toastText, toastPosition = "Top") {
  return Toast.show({
    type: toastType,
    text1: "Hi",
    text2: toastText,
    position: toastPosition,
  });
}
export { showToast };
