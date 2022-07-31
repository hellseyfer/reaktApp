import React from 'react'
import style from './Main.module.css';
import CardContainer from '../Products/CardContainer';
import DetailsContainer from '../Products/DetailsContainer';
import { Route, Routes} from 'react-router-dom';
import ParentForm from '../Forms/ParentForm';
import Cart from '../Cart/Cart';

const Main = ({ saludo }) => {

  return (
    <main className={style.container}>
        {/* <Layout>
            <h1 className={style.title}>{saludo}</h1>
            <CardContainer/>
             <Counter value={counter}/>

        </Layout> */}
        <Routes>
            <Route path="/" element={<CardContainer/>} />
                <Route path="/:category" element={<CardContainer />} />
                <Route path="/details/:id" element={<DetailsContainer />} />
                <Route path="/form" element={<ParentForm/>} />
                <Route path="/cart" element={<Cart />} /> 
        </Routes>
    </main>
  )
}

export default Main