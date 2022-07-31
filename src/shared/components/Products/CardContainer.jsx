import React, { useEffect, useReducer } from 'react';
import CardList from './CardList';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryContainer from './CategoryContainer';
import SearchBar from './SearchBar';

const CardContainer = () => {
  const itemsInitState = {
    items: [],
    backupItems: [],
  };

  const [list, setList] = useReducer(
    (items, backupItems) => ({...items, ...backupItems}), itemsInitState
  );
  const [loading, setLoading] = useState(true);
  //const  param = useParams();
  const { state } = useLocation();

  useEffect(() => {
    fetch(state?.category ? `https://fake-products-eric.herokuapp.com/api/products/category/${state.category}` : 'https://fake-products-eric.herokuapp.com/api/products')
      .then((res) => {
        const p = res.json();
        p.then((d) => {
          
          setList({items:d, backupItems:d});
          setLoading(false);
        }).catch(() => {
          console.log('Error');
          setLoading(false);
        });
      })
      .catch(() => {
        console.log('Error');
        setLoading(false);
      });
  },[state?.category]);


  const handleSearch = (e) => {
    if(e.target.value.length > 0) {
        setList({items: list.items.filter(d => d.name.toLowerCase().includes(e.target.value.toLowerCase())), backupItems: list.backupItems});
    } else {
        setList({items: list.backupItems, backupItemd: list.backupItems});
    }
  };

  return (
    loading 
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
        <SearchBar handleSearch={handleSearch}></SearchBar>
        <h2>Artículos</h2>
        <CardList data={list.items} />
      </div>
  
  );
};

export default CardContainer;
