import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Item = ({id, name, description, stock}) => {
  return (
    <Card>
        <CardHeader>
        <Heading size='md'> {name}</Heading>
        </CardHeader>
        <CardBody>
        <Text>{description}</Text>
        </CardBody>
        <CardFooter>
        <Text>{stock}</Text>
        <Link to={`/item/${id}`}>
            <Button>
            Detalle
            </Button>
        </Link>
        <Button>Agregar</Button>
        </CardFooter>
  </Card>
  )
}

export default Item