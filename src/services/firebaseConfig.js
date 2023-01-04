import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkYNzfmmi5sFy-BXbUnmGUgirSxv2-sqo",
  authDomain: "app-backend-b336a.firebaseapp.com",
  projectId: "app-backend-b336a",
  storageBucket: "app-backend-b336a.appspot.com",
  messagingSenderId: "680030483940",
  appId: "1:680030483940:web:ac70bb5dccca0eb71143f1",
  measurementId: "G-0F6SQMCLHX",
};

if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
