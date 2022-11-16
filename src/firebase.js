import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYAW9F1kP29j38dfZuZxK4lppUkSLD25c",
  authDomain: "react-portfolio-abhishek.firebaseapp.com",
  projectId: "react-portfolio-abhishek",
  storageBucket: "react-portfolio-abhishek.appspot.com",
  messagingSenderId: "278164302078",
  appId: "1:278164302078:web:797fe5960bb12b5fca1daf",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
//////////////////////////////////
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBlLJg0ZUjT9ugV_Avg0DYH_hZps3r7LwM",
//   authDomain: "portfolio1234-92290.firebaseapp.com",
//   projectId: "portfolio1234-92290",
//   storageBucket: "portfolio1234-92290.appspot.com",
//   messagingSenderId: "438212328017",
//   appId: "1:438212328017:web:e987393929202268c61670"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);