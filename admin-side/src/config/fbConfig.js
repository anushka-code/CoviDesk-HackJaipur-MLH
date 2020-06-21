import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBYfzY0INxMFKuOJOVm3hU1HgML8-zkL6E",
  authDomain: "covi-desk-admin.firebaseapp.com",
  databaseURL: "https://covi-desk-admin.firebaseio.com",
  projectId: "covi-desk-admin",
  storageBucket: "covi-desk-admin.appspot.com",
  messagingSenderId: "785388274202",
  appId: "1:785388274202:web:408d7ac6c31dd55a2887a3",
  measurementId: "G-NWYDGEKRYB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
