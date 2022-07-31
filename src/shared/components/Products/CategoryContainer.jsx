import React from 'react'
import { Link } from 'react-router-dom';
import style from './Category.module.css'

const CategoryContainer = () => {

  return (
    <div className={style.categorias}>
        <Link className={style.categoria} to={`/category/todos`}>Todos</Link>
        <Link className={style.categoria} to={`/category/camisas`}>Camisas</Link>
        <Link className={style.categoria} to={`/category/billeteras`}>Billeteras</Link>
        <Link className={style.categoria} to={`/category/remeras`}>Remeras</Link>
        <Link className={style.categoria} to={`/category/gorras`}>Gorras</Link>
    </div>
  )
}

export default CategoryContainer