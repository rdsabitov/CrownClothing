import  { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from '@firebase/firestore';

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


  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth,additionalInformation={}) => { 
      if(!userAuth) { 
          return ;
      }
      const userDocRef = doc(db, 'users', userAuth.uid);

      const userSnapshot = await getDoc(userDocRef)

      if(!userSnapshot.exists()) { 
          const {displayName, email} = userAuth;
          const createAt = new Date();

          try { 
              await setDoc(userDocRef, { 
                  displayName,
                  email,
                  createAt,
                  ...additionalInformation,

              }); 
          } catch (error) { 
              console.log('error creating the user' + error.message);
          }
      } 
      return userDocRef;
  }


  export const createAuthUserWithEmailAndPassword = async (email, password) => { 
      if(!email||!password) { 
          return;
      }
      return await createUserWithEmailAndPassword(auth, email, password)
  }



export const signInAuthUserWithEmailAndPassword = async (email, password) => { 
    if(!email||!password) { 
        return;
    }
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => signOut(auth);


export const onAuthStateChangedListener = (callback) => {

    onAuthStateChanged(auth, callback) 

}

export const onAuthProductChangedListener = (callback) => { 

}