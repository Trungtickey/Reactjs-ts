// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6AWRAhC6i75EA9gI2OBGYkv82GzeZ4W8",
  authDomain: "react-upload-4168e.firebaseapp.com",
  projectId: "react-upload-4168e",
  storageBucket: "react-upload-4168e.appspot.com",
  messagingSenderId: "796925359922",
  appId: "1:796925359922:web:d295b8358efefdc818092b",
  measurementId: "G-R42946EWMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);