import React from 'react'
import style from './Main.module.css';
import CardContainer from '../Products/CardContainer';
import DetailsContainer from '../Products/DetailsContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import ParentForm from '../Forms/ParentForm';
import CartList from '../Cart/CartList';

const Main = ({ saludo }) => {

  return (
    <main className={style.container}>
       <h1 className={style.title}>{saludo}</h1>
        {/* <Layout>
            <h1 className={style.title}>{saludo}</h1>
            <CardContainer/>
             <Counter value={counter}/>

        </Layout> */}
        <Routes>
            {/* <Route path="/" element={<CardContainer/>} /> */}
                <Route path="/category/:category" element={<CardContainer />} />
                <Route path="/details/:id" element={<DetailsContainer />} />
                <Route path="/form" element={<ParentForm/>} />
                <Route path="/cart" element={<CartList />} /> 
                <Route path="*" element={<Navigate to="/category/todos" replace />} />
        </Routes>
    </main>
  )
}

export default Main