import { Jugador } from "@/interfaces/iJugador";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";


export const registrarJugador = async(jugador:Jugador)=>{
    const docRef = await addDoc(collection(db, "jugadores"), jugador);
}

export const obtenerJugadores = async()=>{
    let jugadores:Jugador[] = []
    const querySnapshot = await getDocs(collection(db, "jugadores"));
    querySnapshot.forEach((doc) => {
        let jugador:Jugador = {
            apellido:doc.data().apellido,
            correo:doc.data().correo,
            lineaPreferida:doc.data().lineaPreferida,
            nombre:doc.data().nombre,
            sexo:doc.data().sexo,
            sobreTi:doc.data().sexo,
            telefono:doc.data().telefono,
            key:doc.id
        }
        jugadores.push(jugador)
    });
    return jugadores}


    export const obtenerJugador = async(key:string)=>{
        const docRef = doc(db, "jugadores", key);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let jugador:Jugador = {
                apellido:docSnap.data().apellido,
                correo:docSnap.data().correo,
                lineaPreferida:docSnap.data().lineaPreferida,
                nombre:docSnap.data().nombre,
                sexo:docSnap.data().sexo,
                sobreTi:docSnap.data().sobreTi,
                telefono:docSnap.data().telefono,
                key:docSnap.id
            }
            return jugador
        } else {
          return undefined
        }
    }

    export const actualizarJugador = async(p:Jugador) => {
        const ref = doc(db,"jugadores",p.key!);
        await updateDoc(ref,{...p})
    }