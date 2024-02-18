
// eslint-disable-next-line react/prop-types
// const ItemListContainer = ({greeting,tomarValor}) => {
//   const valorRandom = Math.random() * 10;
//   return (
//   <>
//     <div>{greeting}</div>
//     <div>{tomarValor(valorRandom)}</div>
//   </>
//   )
// }

import { Center, Grid } from "@chakra-ui/react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getData } from "../utils/getData"

const ItemListContainer = () => {
  const {category} = useParams();
  const [prods, setProds] = useState([])
    
  useEffect(()=>{
    getData()
    .then((data)=>{
      if (category) {
        setProds(data.filter(p =>p.category === category))
      } else{
        setProds(data);
      } 
    })

  },[category])

  return (
  <>
    <Center p='1rem'>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          <ItemList 
            productos = {prods}/>
      </Grid>
    </Center>
  </>
  )
}

export default ItemListContainer

