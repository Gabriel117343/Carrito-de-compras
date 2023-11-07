import React from 'react'
import './card.css'
import { useCarrito } from '../hooks/useCarrito'
import { MagicMotion } from 'react-magic-motion'
export const Card = () => {
  const { carrito, limpiarCarrito } = useCarrito()
  return (
    <MagicMotion>
      <section className='d-flex justify-content-end'>

        <label className='label-cart' type='che' htmlFor='che'><i className='bi bi-cart-fill icono-cart' /></label>
        <input className='btn-input' id='che' type='checkbox' hidden />
        <aside className='cart px-4'>
          <ul>
            {carrito.map(producto => (
              <li key={producto.id}>
                <strong>{producto.title}</strong>
                <br />
                <br />
                <img src={producto.thumbnail} alt={producto.title} />
                <div className='d-flex'>
                  <strong>{producto.category} - </strong>
                  <p>{`$ ${producto.price}`}</p>
                </div>
                <div className='d-flex justify-content-right-left gap-1'>
                  <p>{`Cant: ${producto.cantidad}`}</p>
                  <button className='btn'><i className='bi bi-bag-plus text-white' /></button>
                  <p>2 </p>
                </div>
                <button onClick={e => limpiarCarrito(producto.id)} className='btn d-flex'><i className='bi bi-cart-x text-white' /></button>
              </li>

            ))}
          </ul>
        </aside>

      </section>

    </MagicMotion>

  )
}
