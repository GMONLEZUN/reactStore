import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Box, Flex, Spacer } from '@chakra-ui/react'


const CartWidget = () => {
  return (
    <div>
        <Flex>
            <Box>
                <h4><FontAwesomeIcon icon={faCartShopping} /></h4>
            </Box>
            <Spacer/>
            <Box>
                <span>5</span>
            </Box>
        </Flex>
    </div>
  )
}

export default CartWidget