import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const CartWidget = () => {
  const {cartQty} = useContext(CartContext)

  return (
    <div>
        <Flex>
            <Box>
              <Link to={"/cart"}>
                  <h4><FontAwesomeIcon icon={faCartShopping} /></h4>
              </Link>
            </Box>
            <Spacer/>
            <Box>
                <span>{cartQty()}</span>
            </Box>
        </Flex>
    </div>
  )
}

export default CartWidget