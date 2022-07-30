import React from 'react'
//importo el hook
import {useContext} from 'react'
import { CartContext } from './CartContext'
//importo el contexto
import style from './Cart.module.css';

const Cart = () => {
    const { cart } = useContext(CartContext);

  return (
    <div>
        <h2 style={{margin:'auto'}}>Cart</h2>

        {cart.map(prod => 
            <div className={style.cartContainer} key={prod.id} >
                <img src={prod.img} alt="cover" style={{maxWidth: '10rem'}}/>
                <h4>{prod.name}</h4>
                <p>Precio: ${prod.price}</p>
                <p>Cantidad: {prod.qty}</p>
            </div>
        )}
    </div>
  )
}

export default Cart