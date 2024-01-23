import React, { useEffect, useState } from 'react'
import './ItemListContainere.css'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  //hacemos el useEffect para que al montarse se haga la peticion y cargue los productos
  const [productos, setProductos] = useState([]);
  const {idCategory} = useParams();

  useEffect(()=>{
    const funcionProductos = idCategory ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategory)
      .then(res => setProductos(res)) 
      .catch(error => console.log(error))

  }, [idCategory]);

  return (
    <div className='divList'>
      {/* <h3> {props.greeting} </h3> */}
      <ItemList productos={productos}></ItemList>
    </div>
  )
}

export default ItemListContainer