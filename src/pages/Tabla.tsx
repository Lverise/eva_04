import { obtenerJugadores } from '@/Firebase/Promesas'
import { Jugador } from '@/interfaces/iJugador'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Tabla = () => {
    const [jugadores, setJugadores] = useState<Jugador[]>([])
    useEffect(()=>{
        obtenerJugadores().then((jugadores)=>{
            setJugadores(jugadores)
        }).catch((e)=>{
            console.log(e)
            alert("Algo ocurrio")
        })
    },[])


    return(
        <>
                    <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rut</th>
                        <th>Correo</th>
                        <th>Fecha Nacimiento</th>
                        <th>Edad</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jugadores.map((p)=>{
                            return(
                                <tr>
                                    <td>{p.nombre}</td>
                                    <td>{p.apellido}</td>
                                    <td>{p.telefono}</td>
                                    <td>{p.correo}</td>
                                    <td>{p.sobreTi}</td>
                                    <td>{p.lineaPreferida}</td>
                                    <td>{p.sexo}</td>
                                    <td>
                                        <Link href={{pathname:'Actualizar',query:{key:p.key}}}>
                                        <Button variant='warning'><FaEdit /></Button>
                                        </Link>
                                        <Button variant='danger'><MdDelete /></Button>    
                                    </td>         
                                </tr>
                            )
                            
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Tabla