import { Card, CardBody, CardFooter, Text, Heading, Button, Image, Stack, Divider, ButtonGroup, Flex, Spacer} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
// eslint-disable-next-line react/prop-types
const Item = ({id, name, stock, image, price}) => {
  return (
        <Card maxW='sm'>
          <CardBody>
            <Image
              src={image}
              alt={name}
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{name}</Heading>

              <Text color='blue.600' fontSize='2xl'>
                {price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
              <Flex p='20px'>
                <Link to={`/item/${id}`}>
                <Button variant='solid' colorScheme='blue'>
                  Detalle
                </Button>
                </Link>

                <Spacer/>

                <Text fontSize='sm'>
                  Stock: {stock}
                </Text>
              </Flex>
          <CardFooter>
              <br/>
            <ButtonGroup spacing='2'>
              <ItemCount/>
            </ButtonGroup>
          </CardFooter>
        </Card>
  )
}

export default Item


