import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { ChartContext } from "../../context/ChartContext";
import { useContext } from "react";
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(ChartContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }
    return (
        <div className="divCart">
            {
                carrito.map(prod => <CartItem key={prod.id} {...prod} />)
            }
            <h3> Total:$ {total}  </h3>
            <button onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>

            <Link to="/"> Ver más productos </Link>
           
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart