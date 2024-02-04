import { useState } from "react"
import { Button } from '@chakra-ui/react'

const ItemCount = () => {
  const [contador, setContador] = useState(0);
  
  const sumar = ()=>{
    setContador(contador+1)
  }
  const restar = ()=>{
    if (contador === 0) {
        return null
    }
    setContador(contador-1)
  }
  const reset = ()=>{
    setContador(0)
  }
    return (
    <>
        <Button onClick={restar}>-</Button>
        <p>{contador}</p>
        <Button onClick={sumar}>+</Button>
        <Button onClick={reset}>Reset</Button>
    </>
  )
}

export default ItemCount