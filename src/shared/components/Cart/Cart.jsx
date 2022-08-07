import React from 'react'
import style from './Cart.module.css';
import Counter from '../UI/Counter';
import {useContext} from 'react'
import { CartContext } from '../../../context/CartContext';
//importo el contexto

const Cart = ({product}) => {
    const { patchCart } = useContext(CartContext);

      const onSubmit = (c, p) => {
        patchCart(p, c);
      }

      const handleTotalItem = (p) => {
        return p.qty * p.price;
      }
  
  return (
    <>
    <div className={style.cartGrid} key={product.id} >
                <img src={product.img} alt="cover" style={{maxWidth: '10rem'}}/>
                <h4>{product.name}</h4>
                <div style={{margin:'auto'}}>
                <span>Precio: <span style={{fontWeight:'bold'}}>${product.price}</span></span>
                <p>Total: <span style={{fontWeight:'bold'}}>${handleTotalItem(product)}</span></p>
                </div>
                <div style={{margin:'10px'}}>
                  <p>Cantidad: {product.qty}</p>
                  <Counter initial={product.qty} product={product} onSubmit={onSubmit} submitText='Actualizar cantidad'></Counter>
                </div>
    </div>
    </>
  )
}

export default Cart