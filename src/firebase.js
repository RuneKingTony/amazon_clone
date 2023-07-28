// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC3Kzfz6eZUn0UnAXo3hANr0jll9kXpBmo",
  authDomain: "fir-687cd.firebaseapp.com",
  projectId: "fir-687cd",
  storageBucket: "fir-687cd.appspot.com",
  messagingSenderId: "387177004218",
  appId: "1:387177004218:web:d25764328e1aea03631683",
  measurementId: "G-7GQJRJDJY1"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
   
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };