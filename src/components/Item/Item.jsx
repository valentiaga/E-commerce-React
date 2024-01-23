import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

//componente para mostrar informacion 
const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>ID: {id}</p>
        <p>Precio: $ {precio}</p>
        <Link to={`/item/${id}`}>Ver detalles</Link>
        <button>Añadir al carrito</button>
    </div>
  )
}

export default Item