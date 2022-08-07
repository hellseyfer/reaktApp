import React from 'react';

const Form = ({order, handleChange, form}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        order(e); // send data to parent
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='nombre' onChange={handleChange} placeholder='nombre' value={form.nombre}/>
        <input type="number" name='phone' onChange={handleChange} placeholder='telefono' value={form.phone}/>
        <button>Enviar</button>
    </form>
  )
}

export default Form