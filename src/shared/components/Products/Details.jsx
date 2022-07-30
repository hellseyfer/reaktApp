import React from 'react'
import Counter from '../UI/Counter'

import {useContext} from 'react'
import { CartContext } from '../Cart/CartContext';
import { useNavigate } from 'react-router-dom'

const Details = ({p}) => {
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate();

  const onSubmit = (c) => {
    console.log('submit');
    addToCart(p, c);
    navigate('/cart');
  }

  return (
    <div>
        <h3>{p.name}</h3>
        <img src={p.img} alt="cover" style={{maxWidth: '22rem'}}/>
        <Counter initial={1} stock={p.stock} onSubmit={onSubmit}/>
        <p>stock: {p.stock}</p>
    </div>
  )
}

export default Details