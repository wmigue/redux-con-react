import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

export const Item = ({ tarea }) => {

  const despachar = useDispatch()

  return (
    <div
      className='itemT'
      style={
        tarea.completada ?
          { border: 'solid 1px green', padding:'10px', marginBottom: '5px', borderRadius: '5px' } :
          { border: 'solid 1px red', padding:'10px', marginBottom: '5px', borderRadius: '5px' }}>
      <p>ID: {tarea.id}</p>
      <p
        style={{
          color:'darkgoldenrod' ,
        }}
      >
        {tarea.valor}
      </p>
      <p style={{ color: tarea.completada ? 'green' : 'red' }}>
        {tarea.completada ? "COMPLETA" : "PENDIENTE"}
      </p>
      <button onClick={() => despachar({ type: 'todo/eliminar', payload: tarea })}>eliminar </button>
      <button onClick={() => despachar({ type: 'todo/checkar', payload: tarea })}>✅❌ </button>
    </div>
  )
}