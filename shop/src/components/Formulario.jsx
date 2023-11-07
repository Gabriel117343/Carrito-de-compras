import React from 'react'
import { useProductos } from '../hooks/useProductos'
import './header.css'
import { debounce } from 'lodash'
export const Formulario = () => {
  const { filtros, setFiltros } = useProductos()
  const filtrar = (event) => {
    event.preventDefault()
    const { minPrecio, categoria } = event.target
    setFiltros({
      ...filtros,
      minPrice: minPrecio.value,
      category: categoria.value
    })
  }
  function filtrarCategoria (event) {
    const categoria = event.target.value
    setFiltros({
      ...filtros,
      category: categoria
    })
  }
  const filtrarPrecio = (event) => {
    const precio = event.target.value
    setFiltros({
      ...filtros,
      minPrice: precio
    })
  }
  const debounceFiltrarPrecio = debounce(filtrarPrecio, 300)
  return (
    <form onSubmit={filtrar}>
      <input type='range' min={0} max={1000} defaultValue={filtros.minPrice} onChange={debounceFiltrarPrecio} name='minPrecio' />
      <p>{filtros.minPrice}</p>
      <select name='categoria' id='' onChange={filtrarCategoria}>
        <option value='all'>All</option>
        <option value='home-decoration'>Home</option>
        <option value='laptops'>Laptops</option>
        <option value='skincare'>Skincare</option>
      </select>
      <button type='submit'>Buscar</button>
    </form>
  )
}
