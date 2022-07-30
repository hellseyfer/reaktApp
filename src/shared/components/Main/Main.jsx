import React, {useState} from 'react'
import style from './Main.module.css';
import Button from '../UI/Button';
import Layout from '../UI/Layout';
import Counter from '../UI/Counter';
import CardContainer from '../Products/CardContainer';
import DetailsContainer from '../Products/DetailsContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ParentForm from '../Forms/ParentForm';

const Main = ({ saludo }) => {

  return (
    <main className={style.container}>
        {/* <Layout>
            <h1 className={style.title}>{saludo}</h1>
            <CardContainer/>
             <Counter value={counter}/>

        </Layout> */}
        <Routes>
                <Route path="/" element={<CardContainer />} />
                <Route path="/details/:id" element={<DetailsContainer />} />
                <Route path="/form" element={<ParentForm/>} />
                {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
    </main>
  )
}

export default Main