import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import { Button } from "@chakra-ui/react"

const Cart = () => {
  const { cart, cartQty, totalPrice, emptyCart } = useContext(CartContext)
  return (
    <>
        {cart.map( (p) =>{
            return (
                <>
                    <CartItem key={p.id}
                            item={p}
                    >
                    </CartItem>
                </>
            )
        }
        )}
        <p>Cantidad de productos: {cartQty()}</p>
        <p>Total: ${totalPrice()}</p>

        <Button onClick={emptyCart}>Vaciar Carrito</Button>
    </>
  )
}

export default Cart