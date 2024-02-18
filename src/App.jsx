import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import CartWidget from "./components/CartWidget";
import ShoppingCartContext from "./context/ShoppingCartContext"


const App = () => {

  return (
    <ShoppingCartContext>
      <BrowserRouter> 
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/category/:category" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route exact path="/cart" element={<CartWidget/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </ShoppingCartContext>
  )
}

export default App
