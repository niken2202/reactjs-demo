import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAyB5QerQnhiddiSV5Xc-4wCoEMz2IV0l4",
  authDomain: "crwn-dbb-7c911.firebaseapp.com",
  databaseURL: "https://crwn-dbb-7c911.firebaseio.com",
  projectId: "crwn-dbb-7c911",
  storageBucket: "crwn-dbb-7c911.appspot.com",
  messagingSenderId: "741727515063",
  appId: "1:741727515063:web:25f35f0015787882457832"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("[ERROR] Error creating user: ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
