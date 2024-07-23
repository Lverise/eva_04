import { actualizarJugador, obtenerJugador } from '@/Firebase/Promesas'
import { Jugador } from '@/interfaces/iJugador'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from '../styles/registro.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

const initialState:Jugador = {
    nombre:"",
    apellido:"",
    telefono:"",
    correo:"",
    sobreTi:"",
    lineaPreferida:"",
    sexo:"",
}



export const Actualizar = () => {

    const router = useRouter()  
    const [jugador, setJugador] = useState<Jugador>(initialState)
      
    const handleJugador = (name:string,value:string)=>{
        setJugador({...jugador,[name]:value})
    }

    useEffect(()=>{
        const key = router.query.key;
        if(key!=undefined && typeof(key)=="string"){
            obtenerJugador(key).then((p)=>{
                if(p!=undefined){
                    setJugador(p)
                }
                else{
                    //Volver a la tabla
                }
            })
        }else{
            //Volver a la tabla
        }
        
      },[])

      
  const modificar = ()=>{
    actualizarJugador(jugador).then(()=>{
        alert("Se actualiza con exito")
    })
  }
  return (
    <>
        <Link href="/Menu"><Button>Volver</Button></Link>
        <div className={styles.divRegistro}>
    <h1>Actualizar</h1>
    <Form>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" placeholder="ej: John"
        value={jugador.nombre}
         name='nombre'
         onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="apellido">
        <Form.Label>Apellido:</Form.Label>
        <Form.Control type="text" placeholder="ej: Titor"
        value={jugador.apellido}
        name='apellido' 
        onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="telefono">
        <Form.Label>Teléfono:</Form.Label>
        <Form.Control type="tel" placeholder="ej: +56912345678"
        value={jugador.telefono}
        name='telefono'
        onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="correoElectronico">
        <Form.Label>Correo Electrónico:</Form.Label>
        <Form.Control type="email" placeholder="ej: sg-epk@jtk93.x29.jp" 
        value={jugador.correo}
        name='correo'
        onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="sobreTi">
      <Form.Label controlId="floatingTextarea" label="Cuéntanos sobre ti" className="mb-3"> Sobre ti:
        <Form.Control className={styles.textareaSobreTi} as="textarea" placeholder="Cuéntanos sobre ti" 
        value={jugador.sobreTi}
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
          checked={jugador.lineaPreferida === "Top"}
          onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}
          
        />
        <Form.Check 
          type="radio"
          id="lineJungla"
          label="Jungla"
          name="lineaPreferida"
          value="Jungla"
          checked={jugador.lineaPreferida === "Jungla"}
          onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}
        />
        <Form.Check 
          type="radio"
          id="lineMid"
          label="Mid"
          name="lineaPreferida"
          value="Mid"
          checked={jugador.lineaPreferida === "Mid"}
          onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}
        />
        <Form.Check 
          type="radio"
          id="lineSoporte"
          label="Soporte"
          name="lineaPreferida"
          value="Soporte"
          checked={jugador.lineaPreferida === "Soporte"}
          onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}
        />
        <Form.Check 
          type="radio"
          id="lineBot"
          label="Bot"
          name="lineaPreferida"
          value="Bot"
          checked={jugador.lineaPreferida === "Bot"}
          onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="sexo">
        <Form.Label>Selecciona tu sexo:</Form.Label>
        <Form.Select aria-label="Default select example"
        value={jugador.sexo}
        name="sexo"
        onChange={(e)=>{handleJugador(e.currentTarget.name,e.currentTarget.value)}}>
          <option value="">Selecciona...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </Form.Select>
      </Form.Group>
    <Button type='button'
    onClick={modificar}>Actualizar</Button>
      </Form>
      </div>

    </>
  )
}
export default Actualizar