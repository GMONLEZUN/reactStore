import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

const initCart = JSON.parse(localStorage.getItem('reactCart')) || []

// eslint-disable-next-line react/prop-types
export const CartProvider  = ({children}) =>{
    const [cart, setCart] = useState(initCart);
    
    
    const addToCart = (item, quantity)=>{
        const prodToAdd = {...item, quantity }
        let tmpCart = [...cart]
        let itemInCart = cart.find(i => i.id === prodToAdd.id);
        if(itemInCart){
            itemInCart.quantity += quantity
        } else{
            tmpCart.push(prodToAdd)    
        }
       setCart(tmpCart)
    }

    const cartQty = ()=>{
        return cart.reduce((acc, prod)=> acc + prod.quantity, 0);
    }
    const totalPrice = () => {
        return cart.reduce((acc,prod)=> acc + Number(prod.price) * Number(prod.quantity), 0);
    }
    const emptyCart = ()=>{
        setCart([])
    } 

    useEffect(() => {
        localStorage.setItem('reactCart', JSON.stringify(cart));

    }, [cart])
    

    return(
        <CartContext.Provider value = 
            {
                {cart, 
                setCart, 
                addToCart, 
                cartQty, 
                totalPrice, 
                emptyCart}
            }>

            {children}
        
        </CartContext.Provider>
    )
}

