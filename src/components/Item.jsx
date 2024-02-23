import { Card, CardBody, CardFooter, Text, Heading, Button, Image, Stack, Divider, ButtonGroup, Flex, Spacer, CardHeader} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
// eslint-disable-next-line react/prop-types
const Item = ({id, name, stock, image, price}) => {

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);


  const handleAdd = ()=>{
    quantity < stock && setQuantity(quantity + 1)
  }

  const handleSubstract = ()=>{
    quantity > 1 && setQuantity(quantity - 1)
  }
  return (
        <Flex alignContent='center'>
          <Card maxW='sm'>
            <CardHeader>
              <Flex minWidth='max-content' justifyContent='end'>
                  <Text fontSize='sm'>
                      Stock: {stock}
                  </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Image
                src={image}
                alt={name}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Flex minWidth='max-content' justifyContent='end'>
                  <Text fontSize='2xl'>
                    ${price}
                  </Text>
                </Flex>
                <Heading size='md'>{name}</Heading>
              </Stack>
            </CardBody>
            <Divider />
              <ButtonGroup spacing='2' mt='20px' justifyContent='center'>
                <ItemCount
                  quantity = {quantity}
                  handleAddToCart = {()=>{addToCart({id, name, stock, image, price}, quantity)}}
                  handleAdd = {handleAdd}
                  handleSubstract = {handleSubstract}
                  stock={stock}
                />
              </ButtonGroup>
            <CardFooter>
            <Flex p='20px'>
              <Link to={`/item/${id}`}>
              <Button variant='solid' colorScheme='blue'>
                Detalle
              </Button>
              </Link>
              <Spacer/>
            </Flex>
            </CardFooter>
          </Card>
        </Flex>
        
  )
}

export default Item


