import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/registro.module.css'
import { Jugador } from '@/interfaces/iJugador';
import { registrarJugador } from '@/Firebase/Promesas';

const initialState:Jugador = {
    nombre:"",
    apellido:"",
    telefono:"",
    correo:"",
    sobreTi:"",
    lineaPreferida:"",
    sexo:"",
}



export const Registro = () => {

    const [jugador, setJugador] = useState<Jugador>(initialState)
    
    const handleJugador = (name:string,value:string)=>{
        setJugador({...jugador,[name]:value})
    }

    const registrar = ()=>{
        registrarJugador(jugador).then(()=>{
            alert("Se registró jugador")
        }).catch((e)=>{
            console.log(e);
            alert("Ocurrió un error")
        })
    }

  return (
    <>
    <div className={styles.divRegistro}>
    <h1>Registro</h1>
    <Form>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" placeholder="ej: John"
         name='nombre'
         onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="apellido">
        <Form.Label>Apellido:</Form.Label>
        <Form.Control type="text" placeholder="ej: Titor"
        name='apellido' 
        onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="telefono">
        <Form.Label>Teléfono:</Form.Label>
        <Form.Control type="tel" placeholder="ej: +56912345678" 
        name='telefono'
        onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="correoElectronico">
        <Form.Label>Correo Electrónico:</Form.Label>
        <Form.Control type="email" placeholder="ej: sg-epk@jtk93.x29.jp" 
        name='correo'
        onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="sobreTi">
      <Form.Label controlId="floatingTextarea" label="Cuéntanos sobre ti" className="mb-3"> Sobre ti:
        <Form.Control className={styles.textareaSobreTi} as="textarea" placeholder="Cuéntanos sobre ti" 
        name='sobreTi'
        onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}/>
      </Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="lineaPreferida">
        <Form.Label>Elige la línea que juegas:</Form.Label>
        <Form.Check 
          type="radio"
          id="lineTop"
          label="Top"
          name="lineaPreferida"
          value="Top"
          onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}
          
        />
        <Form.Check 
          type="radio"
          id="lineJungla"
          label="Jungla"
          name="lineaPreferida"
          value="Jungla"
          onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}
        />
        <Form.Check 
          type="radio"
          id="lineMid"
          label="Mid"
          name="lineaPreferida"
          value="Mid"
          onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}
        />
        <Form.Check 
          type="radio"
          id="lineSoporte"
          label="Soporte"
          name="lineaPreferida"
          value="Soporte"
          onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}
        />
        <Form.Check 
          type="radio"
          id="lineBot"
          label="Bot"
          name="lineaPreferida"
          value="Bot"
          onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="sexo">
        <Form.Label>Selecciona tu sexo:</Form.Label>
        <Form.Select aria-label="Default select example"
        name="sexo"
        onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}>
          <option value="">Selecciona...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </Form.Select>
      </Form.Group>
    <Button type='button'
    onClick={registrar}>Registrar</Button>
      </Form>
      </div>
    </>
  )
}

export default Registro