
import { legacy_createStore } from 'redux'
import { tareasStore } from '../reducers/tareas'

export const store = legacy_createStore(tareasStore)