// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_HOI3sdKepgPIJWD68bLTgW6l0gnzBMM",
  authDomain: "kanban-app-6705d.firebaseapp.com",
  projectId: "kanban-app-6705d",
  storageBucket: "kanban-app-6705d.appspot.com",
  messagingSenderId: "202526758057",
  appId: "1:202526758057:web:315a0c90b2f43b13cec5b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }
