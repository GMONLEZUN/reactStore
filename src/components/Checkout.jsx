import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/config"

const Checkout = () => {
    const { cart, cartQty, totalPrice, emptyCart } = useContext(CartContext)
    const [valores, setValores] = useState({email:"", nombre:""});
    const [pedidoId, setPedidoId] = useState("");
    const handleValores = (e)=>{
      setValores({
        ...valores, 
        [e.target.name]: e.target.value,
      })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const total = totalPrice();
        const qty = cartQty();
        const pedido = {productos: cart, Pago: total, cantidad: qty, cliente: {valores}, date: new Date()}
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc)=>{
                setPedidoId(doc.id)
            })
        emptyCart()
      }

      if (pedidoId) {
        return(
            <div>Gracias por tu compra! Tu pedido es el: { pedidoId }</div>
        )
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingresa tu nombre" value={valores.nombre} onChange={handleValores} name="nombre"/> 
            <input type="text" placeholder="Ingresa tu email" value={valores.email} onChange={handleValores} name="email"/> 
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Checkout

