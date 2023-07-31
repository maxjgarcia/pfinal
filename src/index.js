import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "remixicon/fonts/remixicon.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHJO5i9u1Vc59CHjhEiCMmy8Awpqvpo9Y",
  authDomain: "tiendadealegrias-1294e.firebaseapp.com",
  projectId: "tiendadealegrias-1294e",
  storageBucket: "tiendadealegrias-1294e.appspot.com",
  messagingSenderId: "1093775374808",
  appId: "1:1093775374808:web:9ef883bf959b0a70ffdaad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
		<App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
