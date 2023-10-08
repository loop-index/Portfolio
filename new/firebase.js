// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCncg7E6tLoXQhPumh7sqkH6MIZV50z0Bc",
authDomain: "portfolio-a40fe.firebaseapp.com",
projectId: "portfolio-a40fe",
storageBucket: "portfolio-a40fe.appspot.com",
messagingSenderId: "284007920166",
appId: "1:284007920166:web:7af16c22a83520c06bace7",
measurementId: "G-QJVYGRE320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);