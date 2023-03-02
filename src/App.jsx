import { Container, InputGroup, Button, } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selector } from './reducers/tareas.jsx'
import { Item } from './components/item'


function App() {
  const [temporal, setTemporal] = useState("")
  const despachar = useDispatch()
  const estado = useSelector(selector) //el param estado lo toma del store, define que se filtra.

  const Add = (e) => {
    e.preventDefault()
    if (temporal) {
      const id = Math.random().toString(30)
      const tarea = { id: id, valor: temporal, completada: false }
      despachar({ type: "todo/add", payload: tarea })
      setTemporal('')
    }
  }

  return (
    <Container gap={3} class="m-5 mb-5" >
      <InputGroup className="mt-5 mb-5">
        <input placeholder='escribe una tarea' value={temporal} onChange={(e) => setTemporal(e.target.value)} />
        <Button
          variant="outline-primary"
          id="button-addon2"
          onClick={Add}>AGREGAR
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
