import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from './Category.module.css'

const CategoryContainer = () => {
    const navigate =  useNavigate();

    const handleCategory = (e) => {
        console.log(e);
        navigate('/', {
            state: { category: e },
          });
    }
  return (
    <div className={style.categorias}>
        <span className={style.categoria} onClick={() => handleCategory('')}>Todos</span>
        <span className={style.categoria} onClick={() => handleCategory('camisas')}>Camisas</span>
        <span className={style.categoria} onClick={() => handleCategory('billeteras')}>Billeteras</span>
        <span className={style.categoria} onClick={() => handleCategory('remeras')}>Remeras</span>
        <span className={style.categoria} onClick={() => handleCategory('gorras')}>Gorras</span>
    </div>
  )
}

export default CategoryContainer