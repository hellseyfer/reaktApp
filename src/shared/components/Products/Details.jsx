import React from 'react'
import Counter from '../UI/Counter'

import {useContext} from 'react'
import { CartContext } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Details = ({p}) => {
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate();

  const onSubmit = (c, p) => {
    console.log('submit');
    if(c > 0) {
    addToCart(p, c);
    navigate('/cart');
    }
  }

  return (
    <div className='wrapRows'>
      <div>
      <h3>{p.name}</h3>
        <img src={p.img} alt="cover" style={{maxWidth: '22rem'}}/>
      </div>
       <div>
       <Counter initial={1} product={p} onSubmit={onSubmit} submitText='Añadir al Carro'/>
        <p>stock: {p.stock}</p>
       </div>
       
    </div>
  )
}

export default Details