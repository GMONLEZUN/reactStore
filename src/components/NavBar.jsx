import {
    Menu,
    MenuButton,
    MenuList,
    Button,
    Flex,
    Box,
    Spacer,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { getData } from '../utils/getData'
import { useEffect, useState } from 'react'
import NavBarItem from './NavBarItem'

const NavBar = () => {
    const [categories, setCategories] = useState()
    useEffect(()=>{
        getData()
        .then((data)=>{
            let auxCat = [];
            data.forEach(p => auxCat.push(p.category))
            setCategories(new Set(auxCat))
        })
      },[])


  return (
    <Flex>
        <Link to={"/"}>
            <Box p="2" bg={'black'} color={'white'}> 
                <p>Mi tienda en React</p>
            </Box>
        </Link>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Actions</MenuButton>
                <MenuList>
                   {categories && <NavBarItem categories = {categories}/>} 
                </MenuList>
            </Menu>
        </Box>
        <Box>
            <Link to={`/contact`}>
                <Button marginLeft='5px'>
                    Contacto
                </Button>
            </Link>
        </Box>
        <Spacer />
        <Box>
            <CartWidget/>
        </Box>
    </Flex>
  )
}

export default NavBar
