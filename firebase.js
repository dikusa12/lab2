import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAxnWjY93CoC-e4GiPGyzu5ON9hAlHXY7U",
  authDomain: "labs-react.firebaseapp.com",
  projectId: "labs-react",
  storageBucket: "labs-react.appspot.com",
  messagingSenderId: "553507656166",
  appId: "1:553507656166:web:f670b8bcf2d2d891e7c627",
  measurementId: "G-8H6ZVPCK7Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)