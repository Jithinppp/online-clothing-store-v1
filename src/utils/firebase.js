// Import the functions you need from the SDKs you need
// Adding SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// similar to firebase/app for authentication import firestore to interact with firestore database
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp8Mc8wqcn3QKzJ_tRzK08Swjxi0hdWps",
  authDomain: "online-clothing-store-b7d38.firebaseapp.com",
  projectId: "online-clothing-store-b7d38",
  storageBucket: "online-clothing-store-b7d38.appspot.com",
  messagingSenderId: "216024728046",
  appId: "1:216024728046:web:dbfd454b7e1b35e2c30eff",
};

// Initialize FirebaseApp
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
// creating auth instance and signIn with popup
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// initialize firestore database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // this function create users collection in firestore that users logged in based on uid
  // 2.check weather an existing document is there based on the uid from the logged data (signInWithGooglePopup gives a user data having a uid there)
  // doc(1,2,3) 1-database, 2-collection name, 3-identifier
  // users:{id:"234kj343h434o2ih42", name:"Jithin",age:22} this is a collection called users having an identifier id
  //   give me the document under db -> users -> uid
  const userDocRef = doc(db, "users", userAuth.uid);
  //   console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  //   console.log(userSnapshot.exists());

  //   if no user exit create one and save in database collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("an error occurred cant create user ", error);
    }
  }
  // if user exist then return
  return userDocRef;
};

// firebase authentication
// Note: after installed firebase npm package create firebase util file and import all necessary items
// 1. you need to initialize app that make a instance of app by using necessary tokens(firebaseConfig) that get from console
// 2. to make a authentication with google we need a provider instance by google auth provider class
// provider gives the functionalities to sign in it interact with google server and give ability to make authentication
// 3. to create an instance we need auth from getAuth() and export it.
// auth is a single function that only does one thing means communication to google auth is same all time one app need
//  only one authentication service, but provider is a class it inherits some different functionalities that we
// can make use of eg. different buttons make different form of authentication
// 4. export signInWithPopup with auth and provider as argument
// 5.go to console and enable google in sign-in providers

// firebase firestore
//1. import it from firebase/firestore
// getFirestore to get the data from the database firestore so make a instance of it
// doc is the snap shot of document not the data
// setDoc to set some data inside of doc, similarly getDoc to get the data from the document
// db directly points the database
// Note:if the data don't exist in the database google create that because of no harm in db
