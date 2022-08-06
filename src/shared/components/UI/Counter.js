import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';
import useCounter from '../../../hooks/useCounter';
import Button from './Button';
import style from './UI.module.css';

const Counter = ({initial, onSubmit, product, submitText}) => {
    const { cart } = useContext(CartContext);
    const { count, handleSum, handleSub } = useCounter(initial, product.stock);

    const isInCart = (p) => {
      return cart.some((item) => item.id === p.id);
  }

    return (
      isInCart(product) && submitText !== 'Actualizar cantidad'?  
      <span> "ya se encuentra en el carrito"</span>
      :  <>
      <div className={style.wrapRows}>
          <Button text='-' click={handleSub} variant={style.btnStyle}></Button>
          <h2>{count}</h2>
          <Button text='+' click={handleSum} variant={style.btnStyle}></Button>
      </div>
      <Button text={submitText} click={() => onSubmit(count, product)}></Button>

    </>
    )
}

export default Counter