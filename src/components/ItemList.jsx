import Item from "./Item"

// eslint-disable-next-line react/prop-types
const ItemList = ({productos}) => {
  return (
    <>      
      { 
      // eslint-disable-next-line react/prop-types
        productos.map((p)=>{
        return(
            <Item  w='100%'
                key={p.id}
                id={p.id}
                image={p.image}
                name={p.name}
                description={p.description}
                category={p.category}
                stock={p.stock}
                price={p.price}
            /> 
        )
      })
    }   

  </>
  )
}

export default ItemList