
const initialState = {
  entities: [],
  filtrados: 'todas',

}

export const acciones = (state = initialState, action) => {
  switch (action.type) {
    case "todo/add": {
      return {
        ...state, entities: state.entities.concat({ ...action.payload })
      }
    }
    case "todo/checkar": {
      const actualizado = state.entities.map(x => {
        if (x.id === action.payload.id) {
          return { ...x, completada: !x.completada }    // !x.completada=lo opuesto al valor actual.
        } else {
          return x
        }
      })
      return {
        ...state, entities: actualizado
      }
    }
    case "todo/eliminar": {
      const buscado = state.entities.find(x => x.id === action.payload.id)
      const posicion = state.entities.indexOf(buscado)
      state.entities.splice(posicion, 1)
      return {
        ...state, entities: state.entities.map(x => x)
      }
    }
    case "filtro/set": {
      return {
        ...state, filtrados: action.payload
      }
    }
    default:
      return state
  }
}




export const seleccionarTodos = (estado) => {
  const { entities, filtrados } = estado
  if (filtrados === 'completadas') {
    return entities.filter(x => x.completada)
  }
  if (filtrados === 'incompletas') {
    return entities.filter(x => !x.completada)
  }
  if (filtrados === 'todas') {
    return entities
  }
  return entities
}