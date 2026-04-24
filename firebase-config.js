import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCPeSxSMYCZgRflHqMjkwytPtnDQGdvjvI",
  authDomain: "numify-fe0fe.firebaseapp.com",
  projectId: "numify-fe0fe",
  storageBucket: "numify-fe0fe.firebasestorage.app",
  messagingSenderId: "786479629285",
  appId: "1:786479629285:web:5498a951ae5f16bce0650c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);