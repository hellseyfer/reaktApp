import React, { useContext } from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { FavContext } from '../../../context/FavContext';
import { isIn } from '../../../utils/utils';

const Card = ({prod}) => {
  const { fav, addToFav } =  useContext(FavContext);

  const isInFav = isIn(fav, prod);

  return (
    <div className={style.card}>
    <img src={prod.img} alt={prod.name} />
    <div className={style.info}>
        <h3>{prod.name}</h3>
        <h4>$ {prod.price}</h4>
        <Link className={style.infoLabel} to={`/details/${prod.id}`}>ver mas</Link>
        <span className={style.infoLabel} onClick={() => addToFav(prod)}>
          { isInFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        </span>
    </div>
</div>
  )
}

export default Card