import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./credenciales";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);