import React from "react";
import logoEstral from '../img/Estral_Esportslogo_profile.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FloatingLabel, Nav } from 'react-bootstrap'
import Link from "next/link";
export default function Home() {
  return (
    <>
    <Link href='/Registro'>
    <Button className="btn btn-primary">Registrarse</Button>
    </Link>
    </>
  );
}
