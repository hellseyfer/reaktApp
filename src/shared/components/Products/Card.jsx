import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({prod}) => {

  return (
    <div className={style.card}>
    <img src={prod.img} alt={prod.name} />
    <div className={style.info}>
        <h3>{prod.name}</h3>
        <h4>$ {prod.price}</h4>
        <Link to={`details/${prod.id}`}>ver mas</Link>
    </div>
</div>
  )
}

export default Card