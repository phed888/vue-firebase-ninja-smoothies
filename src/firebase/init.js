import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAfqiXZIDoTbPxWc2ytzncy7C_7JVwtILk",
  authDomain: "udemy-ninja-smoothies-785a8.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-785a8.firebaseio.com",
  projectId: "udemy-ninja-smoothies-785a8",
  storageBucket: "udemy-ninja-smoothies-785a8.appspot.com",
  messagingSenderId: "392695080926"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

//export firestore datapase
export default firebaseApp.firestore()