import React, { useState } from 'react'
import Button from './Button';
import style from './UI.module.css';

const Counter = ({initial, onSubmit, product, submitText}) => {
    const [counter, setCounter] = useState(initial);

    const handleSum = () => {
      if(counter < product.stock) setCounter(counter + 1);
    }

    const handleSub = () => {
      if(counter > 0) setCounter(counter - 1);
    }

    return (
      <>
        <div className={style.wrapRows}>
            <Button text='-' click={handleSub} variant={style.btnStyle}></Button>
            <h2>{counter}</h2>
            <Button text='+' click={handleSum} variant={style.btnStyle}></Button>
        </div>
        <Button text={submitText} click={() => onSubmit(counter, product)}></Button>

        </>
        
    )
}

export default Counter