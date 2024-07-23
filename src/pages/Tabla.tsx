import { obtenerJugadores, eliminarJugador } from '@/Firebase/Promesas';
import { Jugador } from '@/interfaces/iJugador';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Tabla = () => {
    const [jugadores, setJugadores] = useState<Jugador[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [jugadorSeleccionado, setJugadorSeleccionado] = useState<Jugador | null>(null);

    useEffect(() => {
        obtenerJugadores().then((jugadores) => {
            setJugadores(jugadores);
        }).catch((e) => {
            console.log(e);
            alert("Algo ocurrió");
        });
    }, []);

    const handleShowModal = (jugador: Jugador) => {
        setJugadorSeleccionado(jugador);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setJugadorSeleccionado(null);
    };

    const handleEliminar = async () => {
        if (jugadorSeleccionado) {
            try {
                await eliminarJugador(jugadorSeleccionado.key!);
                setJugadores(jugadores.filter(j => j.key !== jugadorSeleccionado.key));
            } catch (error) {
                console.error("Error al eliminar el jugador:", error);
                alert("No se pudo eliminar el jugador");
            }
        }
    };

    return (
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
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {jugadores.map((p) => (
                        <tr key={p.key}>
                            <td>{p.nombre}</td>
                            <td>{p.apellido}</td>
                            <td>{p.telefono}</td>
                            <td>{p.correo}</td>
                            <td>{p.sobreTi}</td>
                            <td>{p.lineaPreferida}</td>
                            <td>{p.sexo}</td>
                            <td>
                                <Link href={{ pathname: 'Actualizar', query: { key: p.key } }}>
                                    <Button variant='warning'><FaEdit /></Button>
                                </Link>
                                <Button variant='danger' onClick={() => handleShowModal(p)}><MdDelete /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Estás seguro que deseas eliminar a {jugadorSeleccionado?.nombre} {jugadorSeleccionado?.apellido}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleEliminar}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Tabla;
