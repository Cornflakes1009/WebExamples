// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHzib0sa6ZlZN83SRN-8jkhy8Mqe-Iv2w",
  authDomain: "fir-reactcourse-4d958.firebaseapp.com",
  projectId: "fir-reactcourse-4d958",
  storageBucket: "fir-reactcourse-4d958.firebasestorage.app",
  messagingSenderId: "606758854498",
  appId: "1:606758854498:web:4d11874ddeb79bfa05563b",
  measurementId: "G-RCPZ44X96H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);