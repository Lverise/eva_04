import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/registro.module.css';
import Link from 'next/link';
import { Button, ListGroup, Offcanvas} from 'react-bootstrap';
import logo from '../img/Estral_Esportslogo_profile.webp'
import Image from 'next/image';
import estral from '../img/estral.jpg'
import { RiMenuFill } from "react-icons/ri";
import instagram from '../img/Instagram_icon.png.webp'
import twitch from '../img/twitch logo.png'
import youtube from '../img/pngwing.com.png'
export const Menu = () => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  
  return (
    <>

<Button className={styles.botonCerrar} variant="primary" onClick={handleShow}>
        <RiMenuFill>Menú</RiMenuFill>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
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
        </Offcanvas.Header>
      </Offcanvas>
        <Image className={styles.logo} src={ logo } alt='logo'/>

        <div className={styles.divLanding}>
      <div>
        <h1 className={styles.unete}>Únete</h1>
        <p>
        Estamos buscando nuevos jugadores para nuestro equipo de Esports Estral. Únete al mejor equipo de la LLA (Liga Latinoamérica de LoL)
        y forma parte de una comunidad apasionada por los videojuegos, donde tendrás la oportunidad de competir al más alto nivel,
        mejorar tus habilidades y alcanzar la gloria junto a jugadores de élite.
        </p>
        <Image className={styles.estralFoto} src={ estral } alt='estral'/>
      </div>
      <div>
        <h2>Sobre Nosotros</h2>
        <p>
          Estral es un equipo ya consolidado en el ámbito de los Esports,
          actual campeón de la LLA y actualmente participando en el MSI (Mid Season Invitational).
        </p>
        <p>
          La formación del equipo es la siguiente:
        </p>
          <ul>
            <li>Josedeodo (Jungla)</li>
            <li>Zothve (Top Laner)</li>
            <li>Cody (Mid Laner)</li>
            <li>Snaker (Bot Laner)</li>
            <li>Ackerman (Support)</li>
          </ul>

          <div id="redes">
            <h2>Síguenos en nuestras redes</h2>
    <a  target="_blank" href="https://www.instagram.com/estralesports/?hl=es">
        <Image className={styles.logoRedes} src={ instagram } alt='instagram'/>
    </a>

    <a target="_blank" href="https://www.twitch.tv/team/estralesports">
        <Image className={styles.logoRedes} src={ twitch } alt='twitch'/>
    </a>

    <a target="_blank" href="https://www.youtube.com/channel/UCCDgrZlTAOWVg3g9GomU01Q">
        <Image className={styles.logoRedes} src={ youtube } alt='youtube'/>
    </a>
    </div>
      </div>
    </div>
<br/>
<br/>
<br/>


    </>
)
}

export default Menu