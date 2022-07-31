import React, { useState } from 'react';

const Form = ({onSubmit}) => {
    const initState = {
      nombre:'',
      email:'',
    }
    const [form, setForm] = useState(initState);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit(e); // send data to parent
    };

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='nombre' onChange={handleChange} placeholder='ingresa tu nombre' value={form.nombre}/>
        <input type="email" name='email' onChange={handleChange} placeholder='ingresa tu email' value={form.email}/>
        <button>Enviar</button>
    </form>
  )
}

export default Form