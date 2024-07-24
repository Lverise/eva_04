import { Jugador } from "@/interfaces/iJugador";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./Firebase";
import { Usuario } from "@/interfaces/iUsuario";


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
            fechaNacimiento:doc.data().fechaNacimiento,
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
                fechaNacimiento:docSnap.data().fechaNacimiento,
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

    export const eliminarJugador = async (key: string) => {
        const ref = doc(db, "jugadores", key);
        try {
            await deleteDoc(ref);
            console.log("Jugador eliminado con éxito");
        } catch (error) {
            console.error("Error al eliminar el jugador: ", error);
        }
    };
    
    export const registrarUsuario = async(usuario:Usuario)=>{
        const docRef = await addDoc(collection(db, "usuarios"), usuario);
    }

    export const verificarCredenciales = async (usuario: string, contraseña: string) => {
    const q = query(
        collection(db, 'usuarios'),
        where('usuario', '==', usuario),
        where('contraseña', '==', contraseña)
    );
    
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
    };
