import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAPDwDGUz3bcu_IXxACeIiThGe4Lb9H8J8",
    authDomain: "expo-trial-project.firebaseapp.com",
    projectId: "expo-trial-project",
    storageBucket: "expo-trial-project.appspot.com",
    messagingSenderId: "388590386513",
    appId: "1:388590386513:web:2179b2cc825091e5212770"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export default firebase