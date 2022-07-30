import React from 'react'
import Card from './Card';

const CardList = ({data}) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '80%' }}>
        {data.map((prod) => (
            <Card prod={prod} key={prod.id} />
        ))}
    </div>
  )
}

export default CardList