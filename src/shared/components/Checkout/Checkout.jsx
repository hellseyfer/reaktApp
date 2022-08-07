import React from 'react';
import { CartContext } from '../../../context/CartContext';
import useFetch from '../../../hooks/useFetch';
import ParentForm from '../Forms/ParentForm';
import Button from '../UI/Button';

const Checkout = () => {

    const URL = 'https://fake-products-eric.herokuapp.com/api/orders';
    const [checkout, setCheckout] = React.useState(false);
    const { cart, tPrice } = React.useContext(CartContext);

    const { state, dispatch } = useFetch();

  const handleOpenCheckout = (e) => {
    setCheckout(true);
  }

  const onConfirm = (form) => {
    const req = {
      cart,
      total: tPrice,
      user: form.nombre,
      phone: form.phone
    }
    dispatch({ type: 'FETCH_INIT', payload: URL, method: 'POST', body: JSON.stringify(req) });
  };

  return (
    <>
      { !checkout ? <Button text="Buy" click={handleOpenCheckout} variant={'btn-primary'}></Button> :
      !state?.data ? <ParentForm onConfirm={onConfirm}></ParentForm> : null}
      { state?.loading ? <h3>Loading...</h3> : 
      state?.error ? <h3>{state?.error}</h3> : 
      state.data?.id ? <><h3>Thanks for your order!</h3> 
        <h4>Id: {state?.data?.id}</h4></> : null }
      
    </>
  );
};

export default Checkout;
