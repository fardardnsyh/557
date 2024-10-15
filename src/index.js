import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { firebase } from "@firebase/app";
require("firebase/firestore");
require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyA9ApQ3Mhbga323RYlXqaW8X73QWtvprAg",
  authDomain: "bes-chan.firebaseapp.com",
  projectId: "bes-chan",
  storageBucket: "bes-chan.appspot.com",
  messagingSenderId: "889845667798",
  appId: "1:889845667798:web:e97a653a43abfcf0963677",
  measurementId: "G-MHY6F8BPC5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
