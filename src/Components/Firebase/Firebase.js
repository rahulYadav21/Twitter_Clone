// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJzBShmE-gctVwnjNP3qeqtPDteT3DpVc",
  authDomain: "twitter-clone-ee6e3.firebaseapp.com",
  databaseURL: "https://twitter-clone-ee6e3-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-ee6e3",
  storageBucket: "twitter-clone-ee6e3.appspot.com",
  messagingSenderId: "699713043254",
  appId: "1:699713043254:web:63cfd9b33b348886265197",
  measurementId: "G-Q7M8G6JJRJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const db = getFirestore(firebaseApp);
export const auth = getAuth();

export default db;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);