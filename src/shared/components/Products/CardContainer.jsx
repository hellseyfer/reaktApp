import React, { useEffect } from 'react';
import CardList from './CardList';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryContainer from './CategoryContainer';

const CardContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  //const  param = useParams();
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
    fetch(state?.category ? `https://fake-products-eric.herokuapp.com/api/products/category/${state.category}` : 'https://fake-products-eric.herokuapp.com/api/products')
      .then((res) => {
        const p = res.json();
        p.then((d) => {
          
          setItems(d);
          console.log(d); //si esto devolviera otra promesa debería seguir haciendo callbacks
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
  },[state]);

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
        <h2>Artículos</h2>
        <CardList data={items} />
      </div>
  
  );
};

export default CardContainer;
