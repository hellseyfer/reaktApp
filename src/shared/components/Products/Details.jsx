import React from 'react'
import Counter from '../UI/Counter'

const Details = ({p}) => {
  return (
    <div>
        <h3>{p.name}</h3>
        <img src={p.img} alt="cover"/>
        <Counter initial={0} stock={4}/>
    </div>
  )
}

export default Details