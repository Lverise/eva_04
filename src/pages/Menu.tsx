import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/registro.module.css';
import Link from 'next/link';
import { Button, ListGroup} from 'react-bootstrap';
import logo from '../img/Estral_Esportslogo_profile.webp'
import Image from 'next/image';

export const Menu = () => {

  return (
    <>
        <Image className={styles.logo} src={ logo } alt='logo'/>
        <ListGroup className={styles.listaMenu} as="ul">
            <ListGroup.Item className={styles.cabezaMenu} as="li">Menú</ListGroup.Item>
            <ListGroup.Item className={styles.itemLista} as="li">
        <Link className={styles.linkMenu}  href="/RegistroJugador"><Button className={styles.botonesLista} >Registrar jugador</Button></Link>
            </ListGroup.Item>
            <ListGroup.Item className={styles.itemLista} as="li">
            <Link className={styles.linkMenu} href="/Tabla"><Button className={styles.botonesLista}>Ver jugadores</Button></Link>
            </ListGroup.Item>
            <ListGroup.Item className={styles.itemLista} as="li">
            <Link className={styles.linkMenu} href="/RegistroUsuario"><Button className={styles.botonesLista}>Registrar nuevo usuario</Button></Link>
            </ListGroup.Item>
            <ListGroup.Item className={styles.itemLista} as="li">
            <Link  className={styles.linkMenu} href="/"><Button className={styles.botonesLista}>Salir</Button></Link>
            </ListGroup.Item>
        </ListGroup>




    </>
)
}
export default Menu