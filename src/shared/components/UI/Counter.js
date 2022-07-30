import React, { useState } from 'react'
import Button from './Button';
import style from './UI.module.css';



const Counter = ({initial, stock, onSubmit}) => {
    const [counter, setCounter] = useState(initial);

    const handleSum = () => {
      if(counter < stock) setCounter(counter + 1);
    }

    const handleSub = () => {
      if(counter > initial) setCounter(counter - 1);
    }

    return (
      <>
        <div className={style.wrapRows}>
            <Button text='-' click={handleSub} variant={style.btnStyle}></Button>
            <h2>{counter}</h2>
            <Button text='+' click={handleSum} variant={style.btnStyle}></Button>
        </div>
        <Button text='Añadir al carro' click={() => counter > 0 ? onSubmit(counter) : alert('debe especificar cartidad')}></Button>

        </>
        
    )
}

export default Counter