import { useState } from 'react';
import { Boton } from '../boton/boton';
import { Campo } from '../campo/campo';
import { ListaOpciones } from '../lista_opciones/listaOpciones';
import './formulario.css';

export const Formulario =(props)=>{

    const [nombre, setNombre]=useState('')
    const [puesto, setPuesto]=useState('')
    const [foto, setFoto]=useState('')
    const [equipo, setEquipo]=useState('')

    const [titulo, actualizarTitulo]= useState("")
    const [color, actualizarColor]=useState("")

    const {registrarColaborador, crearEquipo}=props

    const manejarEnvio = (evento)=>{
        evento.preventDefault()
        let datos ={
            nombre,
            puesto, 
            foto,
            equipo
        }
        registrarColaborador(datos)
    }

    const manejarNuevoEquipo = (e)=>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required={true} 
                valor={nombre}
                actualizarValor = {setNombre}
            />

            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={puesto}
                actualizarValor = {setPuesto}
            />

            <Campo 
                titulo="Foto" 
                placeholder="Ingresar Enlace de foto"
                valor={foto}
                actualizarValor = {setFoto}
            />
            <ListaOpciones
                equipos={props.equipos}
                valor={equipo}
                actualizarValor = {setEquipo}
            />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required={true} 
                valor={titulo}
                actualizarValor = {actualizarTitulo}
            />

            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor={color}
                actualizarValor = {actualizarColor}
                type='color'
            />

            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
    
}