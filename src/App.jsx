import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


const App = () => {

  return (
    <CartProvider>

      <BrowserRouter> 
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/category/:category" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/checkout" element={<Checkout/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
