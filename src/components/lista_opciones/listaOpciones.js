import "./listaOpciones.css";

export const ListaOpciones =(props)=>{

    // Metodo map -> arreglo.map((dato, index)=>{
    //     return <option></option>
    // })

    const manejarCambio=(e)=>{
        props.actualizarValor(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option
                value=''
                disabled
                defaultValue=''
                hidden
            >Seleccionar equipo</option>
            {props.equipos.map((equipo, index)=> <option value={equipo} key={index}>{equipo}</option>)}
        </select>
    </div>
}