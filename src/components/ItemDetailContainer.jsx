import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";

// import { getData } from "../utils/getData.js";

const ItemDetailContainer = () => {

    const [prod, setProd] = useState([]);
    const { id } = useParams();
    // useEffect(()=>{
    //   getData()
    //     .then((data)=>{
    //       setProds(data)})
    // },[])

    useEffect(()=>{
      const docRef = doc(db,"productos", id);
      getDoc(docRef)
        .then((resp)=>{
          setProd({...resp.data(), id: resp.id})
        })
    },[id])
  return (
    <>
      {prod && <ItemDetail prod = {prod} />}
    </>
  )
}

export default ItemDetailContainer

