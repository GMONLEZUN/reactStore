/* eslint-disable react/prop-types */

const CartItem = ({item}) => {
  return (
    <>
            <h3>{item.name}</h3>
            <p>precio unitario {item.price}</p>
            <p>cantidad {item.quantity}</p>
    </>
  )
}

export default CartItem