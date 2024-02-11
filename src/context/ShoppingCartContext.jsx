import { createContext, useState } from "react";


export const CartContext = createContext(null)

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const longitud = cart.length;
    console.log(longitud);
    const variable = 'React';
    return(
        <CartContext.Provider value = {{cart, setCart, longitud, variable}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider;