// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyCxKCWUewZsk1tz8YX4UDE0nKFIpdnJRzo',
    authDomain: 'novatec-320522.firebaseapp.com',
    projectId: 'novatec-320522',
    storageBucket: "novatec-320522.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db =getFirestore();
export default app;