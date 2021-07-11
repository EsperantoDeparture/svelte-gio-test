import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxaqEMa-r7HbGZOGm4459lIoAerwhCWgk",
  authDomain: "testfrontendgio.firebaseapp.com",
  projectId: "testfrontendgio",
  storageBucket: "testfrontendgio.appspot.com",
  messagingSenderId: "911709519516",
  appId: "1:911709519516:web:a69d6dd01104193ed6b759",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(app);

export const storage = firebase.storage(app);

export const db = firebase.firestore(app);
