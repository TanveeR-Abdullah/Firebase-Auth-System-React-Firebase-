// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3jPCn2yN67UNBdfo75t8anHrS28jXj7E",
  authDomain: "fir-auth-system-project.firebaseapp.com",
  projectId: "fir-auth-system-project",
  storageBucket: "fir-auth-system-project.firebasestorage.app",
  messagingSenderId: "220828477193",
  appId: "1:220828477193:web:0b5e01dae0435f5f3755d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);