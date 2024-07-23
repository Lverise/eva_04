import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/registro.module.css';
import Link from 'next/link';
import { verificarCredenciales } from '@/Firebase/Promesas';

export const Home = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const credencialesValidas = await verificarCredenciales(usuario, contraseña);

    if (credencialesValidas) {
      router.push('/Menu');
    } else {
      setError('Usuario o contraseña incorrecta');
    }
  };

  return (
    <>
      <Link href="/Menu"><Button>Menu</Button></Link>
      <div className={styles.divLogin}>
        <Form onSubmit={handleLogin}>
          <h1>Inicio de sesión</h1>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Nombre de usuario:</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="ej: admin" 
              name="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Contraseña" 
              name="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)} 
            />
          </Form.Group>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button variant="primary" type="submit">
            Iniciar sesión
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Home;
