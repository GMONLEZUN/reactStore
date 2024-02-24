import {
    Button,
    Flex,
    Box,
    Spacer,
    ButtonGroup,
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
// import { getData } from '../utils/getData'
import { useEffect, useState } from 'react'
import NavBarItem from './NavBarItem'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

const NavBar = () => {
    const [categories, setCategories] = useState()
    // useEffect(()=>{
    //     getData()
    //     .then((data)=>{
    //         let auxCat = [];
    //         data.forEach(p => auxCat.push(p.category))
    //         setCategories(new Set(auxCat))
    //     })
    //   },[])
      useEffect(()=>{
        const productsRef = collection(db, "productos");
        getDocs(productsRef)
          .then((resp)=>{
                console.log(resp.docs)
                let auxCat = [];
                resp.docs.forEach(p => auxCat.push(p.data().category))
                setCategories(new Set(auxCat))
              })
        },[])

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Link to={"/"}>
            <Box p="2" bg={'black'} color={'white'}> 
                <p>Mi tienda en React</p>
            </Box>
        </Link>
        <Spacer />
        <ButtonGroup gap='2'>
            {categories && <NavBarItem categories = {categories}/>} 
            <Box>
            <Link to={`/contact`}>
                <Button marginLeft='5px'>
                    Contacto
                </Button>
            </Link>
        </Box>
        </ButtonGroup>
        <Spacer />
        <Box>
            <CartWidget/>
        </Box>
    </Flex>
  )
}

export default NavBar
