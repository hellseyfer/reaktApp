import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext();


//Creo mi componente de contexto que solo va a manejar lógica
export const CartContextProvider = ({children}) => {
    //Podemos tener estados y funciones
    const [cart, setCart] = useState([]);
    const [totalItems, setCartQty] = useState(0);

    useEffect(() => {   //para efectos secundarios
        setCartQty(cart.reduce((acc, cur) => acc + cur.qty, 0));
    }, [cart]); // se ejecuta al inicio y cada vez que se modifica cart

    const addToCart = (p, qty) => {
        //Añadir al carrito
        console.log('Añadiendo al carrito', p);
        var exists = cart.some((item) => item.id === p.id);

        if(!exists) {
            setCart(cart => [...cart, {...p, qty}])
        } else {
            setCart(cart => cart.map(item => item.id === p.id ? {...item, qty: item.qty + qty} : item))
        }
    }

    const patchCart = (p, qty) => {
        //Actualizar el carrito
        console.log('Actualizando el carrito', p);
        if(qty === 0) {
            setCart(cart => cart.filter(item => item.id !== p.id));
        } else {
            setCart(cart => cart.map(item => item.id === p.id ? {...item, qty} : item))
        }
    }
    
        return(
            //Los children serían los componentes que están envueltos en app por mi contexto
            <CartContext.Provider value={{cart, addToCart, patchCart, totalItems}}>
                {children}
            </CartContext.Provider>
        )
    }    