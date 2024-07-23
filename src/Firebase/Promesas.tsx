import { Jugador } from "@/interfaces/iJugador";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";


export const registrarJugador = async(jugador:Jugador)=>{
    const docRef = await addDoc(collection(db, "jugadores"), jugador);
}