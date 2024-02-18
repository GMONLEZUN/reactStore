/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, CardHeader, Center, Heading, Text } from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const ItemDetail = ({prods}) => {
    const {id} = useParams();
    const [prod, setProds] = useState({})
    useEffect(() => {
        const filteredProds = prods.filter((p)=>p.id == id)
         setProds(filteredProds[0])
    }, [id, prods])
    
    

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