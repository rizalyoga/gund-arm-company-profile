// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH5VO545wryHUp9qw4smvsTDCZrgiTyP4",
  authDomain: "gund-arm.firebaseapp.com",
  projectId: "gund-arm",
  storageBucket: "gund-arm.appspot.com",
  messagingSenderId: "637372448089",
  appId: "1:637372448089:web:856dc18cc1751246d16048",
  measurementId: "G-WJMG69F9T8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
