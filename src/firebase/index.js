import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  setDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_Cd3JknbTqN_HS-0ty-xpxi-RLiuWD-s",
  authDomain: "my-project-1e6db.firebaseapp.com",
  projectId: "my-project-1e6db",
  storageBucket: "my-project-1e6db.appspot.com",
  messagingSenderId: "406177410505",
  appId: "1:406177410505:web:12e8cd9f6d6b851a1e0c18",
  measurementId: "G-JEWDKLFRRC",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

const db = getFirestore();

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const { email } = user;

  try {
    const usersRef = collection(db, "users");
    const snapshot = await getDoc(doc(usersRef, user.uid));

    if (!snapshot.exists()) {
      await setDoc(doc(usersRef, user.uid), {
        email,
        ...additionalData,
      });
    }
  } catch (error) {
    console.log("Error creating user document", error);
  }
};

export const getUserById = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  try {
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("Error getting user document", error);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const snapshot = querySnapshot.docs[0];
      const uid = snapshot.id;
      const data = snapshot.data();
      return { uid, ...data };
    }
  } catch (error) {
    console.log("Error getting user document", error);
  }
};
