// Import the functions you need from the SDKs you need
// Adding SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// similar to firebase/app for authentication import firestore to interact with firestore database
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

// creating / initialize auth instance
export const auth = getAuth();
// initialize firestore database
export const db = getFirestore();

// !these are the utility functions that can manage if any update in the third-party libs eg firebase
// ? for authentication

// sign-in with popup
export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);

// sign up with email and password or create account with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// sign in with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// signOut function
export const signOutUser = async () => await signOut(auth);

// auth state change function
// onAuthStateChanged will listen any authentication instance and it persist the user data
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//? for firestore
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalData = {}
) => {
  // this function create users collection in firestore that users logged in based on uid
  // 2.check weather an existing document is there based on the uid from the logged data
  // (signInWithGooglePopup gives a user data having a uid there)
  // doc(1,2,3) 1-database, 2-collection name, 3-identifier
  // users:{id:"234kj343h434o2ih42", name:"Jithin",age:22} this is a collection called users having an identifier id
  // give me the document under db -> users -> uid or creating the path
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
        ...additionalData,
      });
    } catch (error) {
      console.log("an error occurred cant create user ", error);
    }
  }
  // if user exist then return
  return userDocRef;
};

// uploading/add/create a data into firestore
export const addCollectionAndDocument = async (
  collectionKey,
  objectToStore,
  field
) => {
  console.log(collectionKey, objectToStore);
  // collection key is the key of the collection like reference
  // objectToStore is the object we want to store in the database
  // filed will decide the title of the collection item or filed in the collection item
  const collectionRef = collection(db, collectionKey);
  // initiate the batch
  const batch = writeBatch(db);
  // loop through the batch and make a docRef and set the batch
  objectToStore.forEach((object) => {
    const docRef = doc(collectionRef, field);
    batch.set(docRef, object);
  });
  // after setting the batch commit it
  await batch.commit();
  console.log("done");
};

// for get/retrieve a data from firestore
export const getCollectionAndDocument = async () => {
  // set the reference
  const collectionRef = collection(db, "categories");
  // make a query to the server with the reference
  const q = query(collectionRef);
  // after creating query get the snapshot or doc by the query as argument
  const querySnapshot = await getDocs(q);
  //querySnapshot has a docs and a function data() that will get the actual data from database
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    // getting data from documentSnapshot and call data() method to get exact data
    // after that return the reduce method a object that contain title and its items
    // initially reduce acc is a {} there for acc add up new key:title and its value is items
    const { items, title } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};
