import React from 'react'
import './ItemDetail.css';
const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <p>Lorem ipsum dolor, sit amet cosnsectetur adipisicing elit. Repellendus cum, earum nesciunt nam provident molestiae voluptas fugit eligendi culpa voluptate ducimus laudantium, possimus soluta ut debitis vero error odit a.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail