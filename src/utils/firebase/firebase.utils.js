import  { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkWFXtN5BNr53U6zjDBTUPVb_gXQjcjh8",
    authDomain: "crown-clothing-db-a327b.firebaseapp.com",
    projectId: "crown-clothing-db-a327b",
    storageBucket: "crown-clothing-db-a327b.appspot.com",
    messagingSenderId: "330973241175",
    appId: "1:330973241175:web:9cbdb2c628c5951ebea812"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);


  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  