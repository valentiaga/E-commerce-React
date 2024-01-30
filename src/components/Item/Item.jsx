import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

//componente para mostrar informacion 
const Item = ({id, nombre, precio, img, stock}) => {

  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>ID: {id}</p>
        <p>Precio: $ {precio}</p>
        <Link to={`/item/${id}`}>Ver detalles</Link>

    </div>
  )
}

export default Item