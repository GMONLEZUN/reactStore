/* eslint-disable react/prop-types */
import { MenuItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const NavBarItem = ({categories}) => {
    console.log(categories)
    const categoriesArr = [...categories]
    console.log(categoriesArr)
  return (
    <>
        {
            categoriesArr.map(category=>{
                return(
                    <Link to={`/category/${category}`} key={category}>
                        <MenuItem >
                                <span>{category}</span>
                        </MenuItem>
                    </Link>
            )
        })
        }
    </>
    
  )
}

export default NavBarItem


