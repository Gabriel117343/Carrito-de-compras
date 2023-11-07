import { createContext, useState } from 'react'
export const FiltrosContext = createContext()

export const FiltrosProvider = ({ children }) => {
  const [filtros, setFiltros] = useState({
    minPrice: 0,
    category: 'all'
  })

  return (
    <FiltrosContext.Provider value={
      {
        filtros,
        setFiltros
      }

    }
    >{children}
    </FiltrosContext.Provider>
  )
}
