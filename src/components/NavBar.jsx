import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Box,
    Spacer,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <Flex>
        <Box p="2" bg={'black'} color={'white'}> 
            <p>Mi tienda en React</p>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Actions</MenuButton>
                <MenuList>
                    <MenuItem>Categoría A</MenuItem>
                    <MenuItem>Categoría B</MenuItem>
                    <MenuItem>Categoría C</MenuItem>
                    <MenuItem>Sobre nosotros</MenuItem>
                </MenuList>
            </Menu>
        </Box>
        <Spacer />
        <Box>
            <CartWidget/>
        </Box>
    </Flex>
  )
}

export default NavBar