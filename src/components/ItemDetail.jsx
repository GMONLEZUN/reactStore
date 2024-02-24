/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, CardHeader, Center, Heading, Text } from "@chakra-ui/react";
import ItemCount from "./ItemCount";


const ItemDetail = ({prod}) => {



  return (
    <>
            <div key={prod.id}>
                <Center p='1rem'>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>{prod.name}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>{prod.description}</Text>
                            <Text>{prod.category}</Text>
                        </CardBody>
                        <CardFooter>
                            <ItemCount/>
                        </CardFooter>
                    </Card>
                </Center>
            </div>
    </>
        
    )
}

export default ItemDetail