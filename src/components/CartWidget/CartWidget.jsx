import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='divCart'>
            <span className="material-symbols-outlined" style={{ color: 'white' }} >
                shopping_cart
            </span>
            <span className="material-symbols-outlined counter" style={{ color: 'white' }} >
                counter_1
            </span>
        </div>
    )
}

export default CartWidget