// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALyS6oQHPpxHhV-m90p5GTz741NAwsxqQ",
  authDomain: "linkedin-4c938.firebaseapp.com",
  projectId: "linkedin-4c938",
  storageBucket: "linkedin-4c938.appspot.com",
  messagingSenderId: "684596202229",
  appId: "1:684596202229:web:0981c74cc56d5259e553bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
export const db= getFirestore(app)