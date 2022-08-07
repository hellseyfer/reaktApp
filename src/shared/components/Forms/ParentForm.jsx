import {React, useState } from 'react'
import Form from './Form';

const ParentForm = ({onConfirm}) => {

    const initState = {
        nombre:'',
        phone:'',
      }

    const [dataForm, setDataForm] = useState(initState);

    const order = () => {
        console.log('submit');
        onConfirm(dataForm);
    }

    const handleChange = (e) => {
        setDataForm({...dataForm, [e.target.name]: e.target.value});
    }

  return (
    <div>
        <h2>Confirm Order</h2>
        {/* <h3>{dataForm?.nombre ? 'Thanks Sr. ' + dataForm?.nombre : 'Provide credentials:'}</h3> */}
        <Form order={order} handleChange={handleChange} form={dataForm}/>

    </div>
  )
}

export default ParentForm