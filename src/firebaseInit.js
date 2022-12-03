import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2W22l0FC1Zduy4k3hv578tjz_0JPri0Q",
    authDomain: "meet3-club.firebaseapp.com",
    databaseURL: "https://meet3-club-default-rtdb.firebaseio.com",
    projectId: "meet3-club",
    storageBucket: "meet3-club.appspot.com",
    messagingSenderId: "417235527174",
    appId: "1:417235527174:web:859bbdcc06be2750958587",
    measurementId: "G-M6EH9MZPGL"
  };

  const app = initializeApp(firebaseConfig);
  export const myDatabase = getFirestore(app);
