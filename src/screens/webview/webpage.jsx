import { WebView } from "react-native-webview";

function WebPage() {
  return (
    <WebView
      source={{
        uri: "https://www.wikipedia.com",
      }}
      style={{
        flex: 1,
      }}
    />
  );
}

export default WebPage;
