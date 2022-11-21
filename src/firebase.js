import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1qSvdhiJFiZs209vt0uTERcRgED_KrDk",
  authDomain: "asdff-32567.firebaseapp.com",
  projectId: "asdff-32567",
  storageBucket: "asdff-32567.appspot.com",
  messagingSenderId: "655331802614",
  appId: "1:655331802614:web:91d3516439b01fde95dbd7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
