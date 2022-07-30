import React, { useEffect } from 'react';
import CardList from './CardList';
import { useState } from 'react';

const CardContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fake-products-eric.herokuapp.com/api/products')
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
  },[]);

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
        <h2>Artículos</h2>
        <CardList data={items} />
      </div>
  
  );
};

export default CardContainer;
