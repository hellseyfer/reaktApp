import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext();

//Creo mi componente de contexto que solo va a manejar lógica
export const CartContextProvider = ({children}) => {
    //Podemos tener estados y funciones
    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : [];
    });
    const [tPrice, setTPrice] = useState(0);
    const [tItems, setTItems] = useState(0);

    useEffect(() => {   //para efectos secundarios
        setTItems(cart.reduce((acc, cur) => acc + cur.qty, 0));
        setTPrice(cart.reduce((acc, cur) => acc + (cur.qty * cur.price), 0));
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart, tItems]); // se ejecuta al inicio y cada vez que se modifica cart


    const addToCart = (p, qty) => {
        //Añadir al carrito
        var exists = cart.some((item) => item.id === p.id);
        if(!exists) { setCart(cart => [...cart, {...p, qty}])
        } else {setCart(cart => cart.map(item => item.id === p.id ? {...item, qty: item.qty + qty} : item)) }
    }

    const patchCart = (p, qty) => {
        //Actualizar el carrito
        if(qty === 0) {
            setCart(cart => cart.filter(item => item.id !== p.id));
        } else {
            setCart(cart => cart.map(item => item.id === p.id ? {...item, qty} : item))
        }
    }

        return(
            //Los children serían los componentes que están envueltos en app por mi contexto
            <CartContext.Provider value={{cart, addToCart, patchCart, tPrice, tItems}}>
                {children}
            </CartContext.Provider>
        )
    }    