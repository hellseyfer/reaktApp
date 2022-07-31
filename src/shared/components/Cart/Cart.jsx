import React from 'react'
//importo el hook
import {useContext} from 'react'
import { CartContext } from './CartContext'
//importo el contexto
import style from './Cart.module.css';
import Counter from '../UI/Counter';

const Cart = () => {
    const { cart, patchCart } = useContext(CartContext);

    const onSubmit = (c, p) => {
      console.log('submit');
      patchCart(p, c);
    }

    const handleTotalItem = (p) => {
      return p.price * p.qty;
    }

  return (
    <div className='container'>
        <h2 style={{margin:'auto'}}>Cart</h2>
        {cart.length > 0 ? 
        <>{cart.map(p => 
            <div className={style.cartGrid} key={p.id} >
                <img src={p.img} alt="cover" style={{maxWidth: '10rem'}}/>
                <h4>{p.name}</h4>
                <div style={{margin:'auto'}}>
                <span>Precio: <span style={{fontWeight:'bold'}}>${p.price}</span></span>
                <p>Total: <span style={{fontWeight:'bold'}}>${handleTotalItem(p)}</span></p>
                </div>
                <div style={{margin:'10px'}}>
                  <p>Cantidad: {p.qty}</p>
                  <Counter initial={p.qty} product={p} onSubmit={onSubmit} submitText='Actualizar cantidad'></Counter>
                </div>
            </div>
        )}
        <div>
          <h3 style={{float:'right'}}>Total: ${cart.reduce((acc, cur) => acc + handleTotalItem(cur), 0)}</h3>
        </div>
</> : <h3>No hay productos en el carrito</h3>}
    </div>
  )
}

export default Cart