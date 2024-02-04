import Item from "./Item"

// eslint-disable-next-line react/prop-types
const ItemList = ({productos}) => {
  return (
    <>
      { 
      // eslint-disable-next-line react/prop-types
        productos.map((p)=>{
        return(
            <Item
                key={p.id}
                id={p.id}
                name={p.name}
                description={p.description}
                category={p.category}
                stock={p.stock}
            />
        )
      })
    }
</>
  )
}

export default ItemList