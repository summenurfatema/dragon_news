// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8G1FV2XncqWBQppB7f9VFvBwl00Ke5ys",
    authDomain: "dragon-news-5c230.firebaseapp.com",
    projectId: "dragon-news-5c230",
    storageBucket: "dragon-news-5c230.appspot.com",
    messagingSenderId: "306112791237",
    appId: "1:306112791237:web:96d539d28a2dffe555a6ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;