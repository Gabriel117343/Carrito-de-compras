import ReactDom from 'react-dom/client'
import React from 'react'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
