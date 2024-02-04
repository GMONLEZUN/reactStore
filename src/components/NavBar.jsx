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
import { Link } from 'react-router-dom'

const NavBar = () => {
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
                    <MenuItem>
                        <Link to={`/category/${'catA'}`}>
                        Categoría A
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={`/category/${'catB'}`}>
                            Categoría B
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={`/category/${'catC'}`}>
                            Categoría C
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={`/category/${'catAb'}`}>
                            Sobre nosotros
                        </Link>
                    </MenuItem>
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