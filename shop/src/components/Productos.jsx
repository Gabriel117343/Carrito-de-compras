import React, { useEffect } from 'react'
import { useProductos } from '../hooks/useProductos'
import { useCarrito } from '../hooks/useCarrito'
import { MagicMotion } from 'react-magic-motion'
import './productos.css'
export const Productos = () => {
  const { productos } = useProductos()
  const { agregarProducto } = useCarrito()
  console.log(productos)
  useEffect(() => {
    console.log(productos)
  }, [])
  return (

    <main>

      <section>
        <ul className='productos'>
          <MagicMotion>
            {productos
              ? productos.slice(0, 9).map(producto => (
                <li key={producto.id} className='producto'>
                  <h3>{producto.title}</h3>
                  <img src={producto.thumbnail} alt={producto.nombre} />
                  <div className='informaciones'>
                    <p>{producto.price}</p>
                    <p>{producto.category}</p>

                  </div>
                  <button onClick={e => agregarProducto(producto)} className='btn'><i className='bi bi-cart-plus text-white' /></button>

                </li>
              ))
              : <p>No hay productos</p>}

          </MagicMotion>

        </ul>

      </section>

    </main>

  )
}
