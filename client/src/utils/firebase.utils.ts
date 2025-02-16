import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBGIbgvVN91UDerYWg9778aUV7Eqs9pNPk",
  authDomain:"task-management-cfe34.firebaseapp.com",
  projectId:"task-management-cfe34",
  storageBucket:"task-management-cfe34.appspot.com",
  messagingSenderId:"802578872298",
  appId:"1:802578872298:web:1b38bd455ad7be33476493",
  measurementId:"G-P3V0P5VCP9",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signOutUser = () => signOut(auth);
