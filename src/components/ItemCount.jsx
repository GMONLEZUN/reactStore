
import { Button, ButtonGroup, Center, IconButton, Tooltip } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

// eslint-disable-next-line react/prop-types
const ItemCount = ({quantity, handleAddToCart, handleAdd, handleSubstract, stock}) => {
  
  return (
    <>
        <ButtonGroup size="sm" isAttached variant={'outline'} gap='10px' justifyContent='center'>
          {quantity <= 1 ? (
            <Tooltip label='minimum stock reached' placement="bottom">
              <IconButton icon={<MinusIcon/>} isDisabled/>
            </Tooltip>
          ) : (
            <IconButton icon={<MinusIcon/>} onClick={handleSubstract}/>
          )}
         <Center>
          <Button onClick={handleAddToCart}
          variant={'solid'}
          colorScheme="blue"> Add to cart {quantity > 1 ? ': '+ quantity : "" } </Button>
         </Center>
         {quantity < stock ? (
            <IconButton icon={<AddIcon/>} onClick={handleAdd}/>

          ) : (
            <Tooltip label='stock limit reached' placement="bottom">
              <IconButton icon={<AddIcon/>} isDisabled/>
            </Tooltip>

          )}
        </ButtonGroup>
    </>
  )
}

export default ItemCount