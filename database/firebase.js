import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhB0A8Z-TfC1gPOLmS2JlwZyrVmT5_USs",
  authDomain: "inout-e0f31.firebaseapp.com",
  projectId: "inout-e0f31",
  storageBucket: "inout-e0f31.appspot.com",
  messagingSenderId: "533795178838",
  appId: "1:533795178838:web:b0a017cc2ea401ce476ef7",
  measurementId: "G-YWS6BYH85Y"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;