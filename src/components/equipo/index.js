import { Colaborador } from '../colaborador'
import './equipo.css'
import hexToRgba from 'hex-to-rgba'

export const Equipo = (props) => {

  const { titulo, colorPrimario, colorSecundario, id } = props.datos
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props
  const obj = {
    backgroundColor:hexToRgba(colorPrimario,0.6)
  }

  return <>
    {
      colaboradores.length > 0 &&
      <section className='equipo' style={obj}>
        <input
          type='color'
          className='inputColor'
          value={colorPrimario}
          onChange={(event)=>{
            actualizarColor(event.target.value, id)
          }}
        />
        <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
        <div className='colaboradores'>
          {
            colaboradores.map((colaborador, index) =>
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />)
          }
        </div>
      </section>
    }
  </>
}
