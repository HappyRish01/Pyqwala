// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.React_App_API_KEY,
  authDomain: process.env.React_App_AUTH_DOMAIN,
  projectId: process.env.React_App_PROJECT_ID,
  storageBucket: process.env.React_App_STORAGE_BUCKET,
  messagingSenderId: process.env.React_App_MESSAGING_SENDER_ID,
  appId: process.env.React_App_APP_ID,
  measurementId: process.env.React_App_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storageDB = getStorage(app)