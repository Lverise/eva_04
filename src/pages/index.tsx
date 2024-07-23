import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { db } from '@/Firebase/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';


export const Home = () => {


  return (
    <>
    <Link href="/Menu"><Button>Menu</Button></Link>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form className="w-50">
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Nombre de usuario:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="ej: admin" 
            name="usuario" 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Contraseña" 
            name="contraseña" 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
    </>
  );
}
  export default Home