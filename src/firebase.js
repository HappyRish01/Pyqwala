// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDSSHKefWh7Yjw_Nab5sdmP7nDHuA9w1lE",
  authDomain: "pyqs-4575a.firebaseapp.com",
  projectId: "pyqs-4575a",
  storageBucket: "pyqs-4575a.appspot.com",
  messagingSenderId: "1045119582313",
  appId: "1:1045119582313:web:f24c394ddc6cd1d663a2f8",
  measurementId: "G-Z26GWZXG4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storageDB = getStorage(app)