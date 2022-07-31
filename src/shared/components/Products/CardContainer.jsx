import React, { useEffect, useReducer } from 'react';
import CardList from './CardList';
import { useParams } from 'react-router-dom';
import CategoryContainer from './CategoryContainer';

const CardContainer = () => {
  const itemsInitState = {
    items: [],
    backupItems: [],
    loading: true,
  };

  const [list, setList] = useReducer((items, backupItems, loading) => ({...items, ...backupItems, ...loading}), itemsInitState);
  const  param = useParams();
  //const { state } = useLocation();

  useEffect(() => {
    const peticion = param?.category !== 'todos' ? `https://fake-products-eric.herokuapp.com/api/products/category/${param.category}` 
      : 'https://fake-products-eric.herokuapp.com/api/products';

    fetch(peticion)
      .then((res) => res.json())
      .then((d) => {
          setList({items:d, backupItems:d, loading:false});
        }).catch(() => {
          setList({loading:false});
        });
  },[param?.category]);

  return (
    list.loading 
      ? <h5>Cargando...</h5>
      : <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CategoryContainer></CategoryContainer>
        <h2>Artículos</h2>
        { <CardList items={list.items} backup={list.backupItems} setterList={setList}/> }
      </div>
  
  );
};

export default CardContainer;
