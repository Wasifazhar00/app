import { SafeAreaView } from "react-native";
import { MainNev } from "./src/navigation/mainNev";
import { Toast } from "react-native-toast-message/lib/src/Toast";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNev />
      <Toast />
    </SafeAreaView>
  );
}
export default App;
