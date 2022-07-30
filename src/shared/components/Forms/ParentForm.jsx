import React from 'react'
import Form from './Form';

const ParentForm = () => {
    const [dataForm, setDataForm] = React.useState({
        nombre: '',
        email: '',
    });

    const onSubmit = (e) => {
        console.log('submit');
        setDataForm({
            nombre: e.target.nombre.value,
            email: e.target.email.value,
        });
    }

  return (
    <div>
        <h1>Welcome</h1>
        <h2>To my Form</h2>
        <h3>{dataForm?.nombre ? 'Thanks Sr. ' + dataForm?.nombre : 'Provide credentials:'}</h3>
        <Form onSubmit={onSubmit}/>
    </div>
  )
}

export default ParentForm