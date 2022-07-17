import firebase from "firebase/compat/app"
import 'firebase/compat/database'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDJVMXg8H_Qi1EwsEF0x1AHipR4UC0Pgf0",
    authDomain: "gb-react-7eb68.firebaseapp.com",
    databaseURL: "https://gb-react-7eb68-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gb-react-7eb68",
    storageBucket: "gb-react-7eb68.appspot.com",
    messagingSenderId: "758544047641",
    appId: "1:758544047641:web:f29e368be413f2bf775488"
};

export const firebaseDB = firebase.initializeApp(firebaseConfig)
export const db = firebase.database()
export const auth = firebase.auth()
