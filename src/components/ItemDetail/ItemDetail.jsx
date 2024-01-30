import React from 'react'
import './ItemDetail.css';
import { Link } from 'react-router-dom'
//1) Importamos el carrito context
import { ChartContext } from '../../context/ChartContext';
//importo el useContext
import { useContext, useState } from 'react';
import Counter from '../Counter/Counter';

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  //Creamos  un estado local con la cantidad de productos agregados. 
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarAlCarrito} = useContext(ChartContext);


  //Creamos una función manejadora de la cantidad
  const manejadorCantidad =  (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
    //voy a crear un objeto con el item y la cantidad
    const item = { id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <p>ID: {id} </p>
      <p>Stock: {stock} </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea eum in consequatur nesciunt dolores nam, fugiat eligendi ipsa esse quod voluptatem accusamus facere natus! Numquam expedita ut repellendus inventore!</p>
      <img src={img} alt={nombre} />

      {
        agregarCantidad > 0 ? (<div className='.agrega-cantidad'><Link to="/cart"> Terminar compra</Link><Link to="/"> Ver más productos </Link></div>) : (<Counter incial = {1} stock = {stock} funcionAgregar = {manejadorCantidad} />)
      }

    </div>
  )
}


export default ItemDetail