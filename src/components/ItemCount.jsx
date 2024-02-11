import { useContext, useState } from "react"
import { Button, ButtonGroup, Center, IconButton, Tooltip } from '@chakra-ui/react'
import { CartContext } from "../context/ShoppingCartContext";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

// eslint-disable-next-line react/prop-types
const ItemCount = ({stock, id, price, name}) => {
  const [count, setCount] = useState(0);
  
  // eslint-disable-next-line no-unused-vars
  const {cart, setCart} = useContext(CartContext);

  const addQty = ()=>{
    setCount(count+1)
  }
  const substractQty = ()=>{
    if (count === 0) {
        return null
    }
    setCount(count-1)
  }
  const reset = ()=>{
    setCount(0)
  }

  const addToCart = () => {
    setCart((currItems) =>{
      const IsItemFound = currItems.find((item)=> item.id === id);
      if (IsItemFound){
        return currItems.map((item)=>{
          if (item.id === id) {
            return {...item, quantity: item.quantity + count}
          } else {
            return item;
          }
        }) 
      } else {
        return [...currItems, { id, quantity: count, price, name }]
      }
    })
  }
  
  return (
    <>
        <Button onClick={reset}>Reset</Button>
        <ButtonGroup size="sm" isAttached variant={'outline'}>
          {count < 1 ? (
            <Tooltip label='minimum stock reached' placement="bottom">
              <IconButton icon={<MinusIcon/>} isDisabled/>
            </Tooltip>
          ) : (
            <IconButton icon={<MinusIcon/>} onClick={substractQty}/>
          )}
         <Center>
          <Button onClick={()=>addToCart()}
          variant={'solid'}
          colorScheme="blue"> Add to cart: {count} </Button>
         </Center>
         {count < stock ? (
            <IconButton icon={<AddIcon/>} onClick={addQty}/>

          ) : (
            <Tooltip label='stock limit reached' placement="bottom">
              <IconButton icon={<AddIcon/>} isDisabled/>
            </Tooltip>

          )}
        </ButtonGroup>
    </>
  )
}

export default ItemCount