// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsKefm8nJSC48F49UQdDiIuNhGzquB684",
  authDomain: "game-websitte.firebaseapp.com",
  projectId: "game-websitte",
  storageBucket: "game-websitte.appspot.com",
  messagingSenderId: "152157567037",
  appId: "1:152157567037:web:2b57bd474ef1e718491254",
  measurementId: "G-05BK2MQ2PL"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };