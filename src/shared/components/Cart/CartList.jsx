import React, { useContext } from 'react'
//importo el hook


import { CartContext } from '../../../context/CartContext';
import Checkout from '../Checkout/Checkout';
import Cart from './Cart';

const CartList = () => {
  const { cart, tPrice  } = useContext(CartContext);
  return (
    <div className='container'>
        <h2 style={{margin:'auto'}}>Cart</h2>
        {cart.length > 0 ? 
        <>{cart.map(p => 
            <Cart product={p} key={p.id}></Cart>
        )}

      <div style={{textAlign: 'end'}}>
      <h3>Total: ${tPrice}</h3>
      <Checkout></Checkout>
      </div>
      
</> : <h3>No hay productos en el carrito</h3>}
    </div>
  )
}

export default CartList