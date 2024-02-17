import { useState, useEffect, useDebugValue } from "react";
// import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {

    const nuevoDoc = doc(db, 'items', idItem);

    getDoc(nuevoDoc)
      .then( res => {
        const data = res.data();
        const nuevoProducto = {id: res.id, ...data};
        setProducto(nuevoProducto)
      })
      .catch( error => console.log('Error: ' +error));
  }, [idItem]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer