import { FiltrosContext } from '../context/filtros'
import { useContext, useEffect, useState } from 'react'
import { products as inicialProductos } from '../mocks/products.json'

export const useProductos = () => {
  const { filtros, setFiltros } = useContext(FiltrosContext)
  const [productos, setProductos] = useState(inicialProductos)

  useEffect(() => {
    const filtrarProductos = () => {
      const productosFiltrados = inicialProductos.filter(producto => {
        if (filtros.category === 'all') {
          return producto.price >= filtros.minPrice
        } else {
          return producto.category === filtros.category && producto.price >= filtros.minPrice
        }
      })
      setProductos(productosFiltrados)
    }
    filtrarProductos()
  }, [filtros])

  return { setFiltros, productos, filtros }
}
