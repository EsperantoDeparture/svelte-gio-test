import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxaqEMa-r7HbGZOGm4459lIoAerwhCWgk",
  authDomain: "testfrontendgio.firebaseapp.com",
  projectId: "testfrontendgio",
  storageBucket: "testfrontendgio.appspot.com",
  messagingSenderId: "911709519516",
  appId: "1:911709519516:web:a69d6dd01104193ed6b759",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore();
