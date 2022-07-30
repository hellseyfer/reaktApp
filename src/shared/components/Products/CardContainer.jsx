import React, { useEffect } from 'react';
import CardList from './CardList';
import { useState } from 'react';

const CardContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://fake-products-eric.herokuapp.com/api/products')
      .then((res) => {
        const p = res.json();
        p.then((d) => {
          setItems(d);
          console.log(d); //si esto devolviera otra promesa debería seguir haciendo callbacks
        }).catch(() => {
          console.log('Error');
        });
      })
      .catch(() => {
        console.log('Error');
      });
  },[]);

  return (
    <div
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
