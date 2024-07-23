import { Usuario } from '@/interfaces/iUsuario';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { registrarUsuario } from '@/Firebase/Promesas';
import styles from '../styles/registro.module.css';

const initialState: Usuario = {
  usuario: "",
  contraseña: ""
};

export const RegistroUsuario = () => {
  const [usuario, setUsuario] = useState<Usuario>(initialState);

  const handleUsuario = (name: string, value: string) => {
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await registrarUsuario(usuario);
      alert("Usuario registrado con éxito");
      setUsuario(initialState);
    } catch (e) {
      console.error(e);
      alert("Ocurrió un error");
    }
  };

  return (
    <>
      <Link href="/Menu"><Button>Menu</Button></Link>
      <div className={styles.divLogin}>
        <Form onSubmit={handleSubmit}>
          <h1>Registro de Usuario</h1>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Nombre de usuario:</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="ej: admin" 
              name="usuario"
              value={usuario.usuario}
              onChange={(e) => handleUsuario(e.currentTarget.name, e.currentTarget.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Contraseña" 
              name="contraseña"
              value={usuario.contraseña}
              onChange={(e) => handleUsuario(e.currentTarget.name, e.currentTarget.value)} 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Registrar Usuario
          </Button>
        </Form>
      </div>
    </>
  );
};

export default RegistroUsuario;
