import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const loginRequest = (email, password) => {
  signInWithEmailAndPassword(email, password);
};
