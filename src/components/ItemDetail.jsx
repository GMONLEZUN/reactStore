import { Card, CardBody, CardFooter, CardHeader, Center, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount";


// eslint-disable-next-line react/prop-types
const ItemDetail = ({products}) => {
    const {id} = useParams();
    let filteredProducts;
    if (products) {
        // eslint-disable-next-line react/prop-types
        filteredProducts = products.filter(p => p.id == id);
    }

  return (
    <div>
        {filteredProducts.map(p =>{
            return(
                <div key={p.id}>
                    <Center p='1rem'>
                        <Card>
                            <CardHeader>
                                <Heading size='md'>{p.name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>{p.description}</Text>
                                <Text>{p.category}</Text>
                            </CardBody>
                            <CardFooter>
                                <ItemCount/>
                            </CardFooter>
                        </Card>
                    </Center>
                </div>
            )
        })}
    </div>
  )
}

export default ItemDetail