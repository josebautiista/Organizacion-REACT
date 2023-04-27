import "./miOrg.css"
import { useState } from "react";


export const MiOrg = (props) => {

    //const [nombreVariable, funcionQueActualiza] = useState(valorInicial)
    // const [mostrar, actualizarMostrar] = useState(true);
    // const manejarClick = () => {
    //     console.log('mostrar/ocultar elemento', mostrar)
    //     actualizarMostrar(false)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="miorg" onClick={props.cambiarMostrar}></img>
    </section>
}

