import React, { useEffect, useState } from 'react'
import './ItemListContainere.css'
import ItemList from '../ItemList/ItemList'
// import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
  //hacemos el useEffect para que al montarse se haga la peticion y cargue los productos
  const [productos, setProductos] = useState([]);
  const {idCategory} = useParams();

  useEffect(() => {
    const misProductos = idCategory ? query(collection(db, 'items'), where('idCat', '==', idCategory)) : collection(db, 'items');

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data};
        })
        setProductos(nuevosProductos);
      })
      .catch( error => console.log(error))
  }, [idCategory]);

  return (
    <div className='divList'>
      {/* <h3> {props.greeting} </h3> */}
      <ItemList productos={productos}></ItemList>
    </div>
  )
}

export default ItemListContainer