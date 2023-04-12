import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCGbbG1V3V8QRZLfQwwxLkPp-1vZEM3Fqg" ,
  authDomain: "chatapp-30d16.firebaseapp.com",
  projectId: "chatapp-30d16",
  storageBucket: "chatapp-30d16.appspot.com",
  messagingSenderId: "194824446525",
  appId: "1:194824446525:web:fd129cc57435f87cd3c054"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

