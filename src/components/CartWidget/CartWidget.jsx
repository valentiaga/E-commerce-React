import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='divCart'>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            <span className="material-symbols-outlined counter">
                counter_1
            </span>
        </div>
    )
}

export default CartWidget