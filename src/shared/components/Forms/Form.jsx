import React from 'react';

const Form = ({onSubmit}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit(e); // send data to parent
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='nombre' placeholder='ingresa tu nombre'/>
        <input type="email" name='email' placeholder='ingresa tu email' />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form