import React from 'react'
import './ItemListContainere.css'
const ItemListContainer = (props) => {
  return (
    <div className='divList'>
      <h3> {props.greeting} </h3>
    </div>
  )
}

export default ItemListContainer