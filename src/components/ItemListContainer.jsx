
import { Center, Grid } from "@chakra-ui/react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

// import { getData } from "../utils/getData"

const ItemListContainer = () => {
  const {category} = useParams();
  const [prods, setProds] = useState([])
    
  useEffect(()=>{
    const productsRef = collection(db, "productos");
    const queryProds = category ? query(productsRef, where("category", "==", category)) : productsRef;
    getDocs(queryProds)
      .then((resp)=>{
          setProds(
            resp.docs.map((doc)=>{
              return {...doc.data(), id: doc.id }
            })
            )
          })
    },[category])
      
  return (
    <>
      <Center px='160px' mt='80px'>
        <Grid 
          templateColumns='repeat(5, 1fr)' 
          gap={6}>
            <ItemList 
              productos = {prods}/>
        </Grid>
      </Center>
    </>
  )
}

export default ItemListContainer

