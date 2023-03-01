import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { legacy_createStore } from 'redux'
import { acciones } from './reducers/reducer1'

const store1 = legacy_createStore(acciones)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store1}>
      <App />
    </Provider>
  </React.StrictMode>,
)
