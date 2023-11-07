import React from 'react'
// importando o react-router-dom

import { Header } from './components/Header'
import { Productos } from './components/Productos'
import { Card } from './components/Card'
import { FiltrosProvider } from './context/filtros'
import { CarritoProvider } from './context/carrito'

export const App = () => {
  return (
    <>
      <FiltrosProvider>
        <CarritoProvider>
          <Card />
          <Header />
          <Productos />
        </CarritoProvider>
      </FiltrosProvider>

    </>
  )
}
