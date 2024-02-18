
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY_FB,
  authDomain: "pintureria-berros.firebaseapp.com",
  projectId: "pintureria-berros",
  storageBucket: "pintureria-berros.appspot.com",
  messagingSenderId: "126707388180",
  appId: "1:126707388180:web:84a7f28e74b85ee3d4bc01"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)