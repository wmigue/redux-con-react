import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { seleccionarTodos } from './reducers/reducer1'
import { Container, InputGroup, Form, Col, Button, Card, Row } from 'react-bootstrap'
import './App.css'

function App() {
  const [temporal, setTemporal] = useState("")
  const despachar = useDispatch()
  const estado = useSelector(seleccionarTodos)

  const Add = (e) => {
    e.preventDefault()
    if (temporal) {
      const id = Math.random().toString(30)
      const tarea = { id: id, valor: temporal, completada: false }
      despachar({ type: "todo/add", payload: tarea })
      setTemporal('')
    }
  }

  const Item = ({ tarea }) => {
    const despachar = useDispatch()
    return (
      <div style={{ border: 'solid 1px white', marginBottom:'5px', borderRadius :'5px'}}>
        Estado:
        <b style={{ color: tarea.completada ? 'green' : 'red' }}>
          {tarea.completada ? "COMPLETADA ✅" : "REQUERIDA ❌"}
        </b>
        <Col
          style={{
            borderColor: 'red',
            textTransform: 'uppercase',
            listStyle: 'none', fontSize: '16px',
          }}>
          {tarea.valor}
        </Col>
        <button onClick={() => despachar({ type: 'todo/eliminar', payload: tarea })}>eliminar </button>
        <button onClick={() => despachar({ type: 'todo/checkar', payload: tarea })}>✅❌ </button>
      </div>

    )
  }



  return (
    <Container gap={3} class="m-5 mb-5" >
      <InputGroup className="mt-5 mb-5">
        <input onChange={(e) => setTemporal(e.target.value)}/>
        <Button
          variant="outline-primary"
          id="button-addon2"
          onClick={Add}>AGREGAR TAREA
        </Button>
      </InputGroup>


      <ul>
        {estado.map(x => <Item key={x.id} tarea={x} />)}
      </ul>


      <Container className="mt-5 text-center" >
        <Button
          variant="outline-primary p-1 m-1"
          onClick={() => despachar({ type: 'filtro/set', payload: 'todas' })}>
          TODAS
        </Button>
        <Button
          variant="outline-primary p-1 m-1" onClick={() => despachar({ type: 'filtro/set', payload: 'incompletas' })}>
          INCOMPLETOS
        </Button>
        <Button
          variant="outline-primary p-1 m-1" onClick={() => despachar({ type: 'filtro/set', payload: 'completadas' })}>
          COMPLETOS
        </Button>
      </Container>

    </Container>
  )


}
export default App
