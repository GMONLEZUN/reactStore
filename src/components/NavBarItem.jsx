/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const NavBarItem = ({categories}) => {

    const categoriesArr = [...categories]
    console.log(categoriesArr)
    console.log(categories)
  return (
    <>
        {
            categoriesArr.map((category)=>{
                return(
                    <Link to={`/category/${category}`} key={category}>
                        <Button >
                                <span>{category}</span>
                        </Button>
                    </Link>
                )
            })
        }
    </>
    
  )
}

export default NavBarItem


