// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// This part should be ignored when uploading to github
const firebaseConfig = {
  apiKey: "AIzaSyCWiUcFEF5BNVHX5jFNkW2HWYkzW32jt-4",
  authDomain: "fb-clone-1daee.firebaseapp.com",
  projectId: "fb-clone-1daee",
  storageBucket: "fb-clone-1daee.appspot.com",
  messagingSenderId: "1054470661809",
  appId: "1:1054470661809:web:baeec3d84d871b3baaa490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);