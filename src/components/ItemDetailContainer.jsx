import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { getData } from "../utils/getData.js";

const ItemDetailContainer = () => {

    const [prods, setProds] = useState([])

    useEffect(()=>{
      getData()
        .then((data)=>{
          setProds(data)})
    },[])

  return (
    <>
      {prods && <ItemDetail prods = {prods} />}
    </>
  )
}

export default ItemDetailContainer

