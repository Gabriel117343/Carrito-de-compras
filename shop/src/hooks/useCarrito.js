import { useContext } from 'react'
import { CarritoContext } from '../context/carrito'
export const useCarrito = () => {
  const { carrito, setCarrito } = useContext(CarritoContext)
  const agregarProducto = (producto) => {
    console.log(producto)
    const productoEnCarrito = carrito.find((p) => p.id === producto.id)
    if (productoEnCarrito) {
      const nuevoCarrito = carrito.map((p) => {
        if (p.id === producto.id) {
          return {
            ...p,
            cantidad: p.cantidad + 1
          }
        }
        return p
      })
      setCarrito(nuevoCarrito)
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    }
  }
  const limpiarCarrito = (productoId) => {
    console.log(productoId)
    const productoEnCarrito = carrito.find(p => p.id === productoId)
    if (productoEnCarrito) {
      const nuevoCarrito = carrito.filter(p => p.id !== productoId)
      setCarrito(nuevoCarrito)
    }
  }
  return { carrito, setCarrito, agregarProducto, limpiarCarrito }
}
