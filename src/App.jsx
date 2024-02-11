// import Async from "./components/Async";
// import ItemCount from "./components/ItemCount";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ShoppingCartContext from "./context/ShoppingCartContext"


const App = () => {

  // [variable, funcionModificadora] = useState(valorInicial)
  // const [contador, setContador] = useState(0);
  // const tomarValor = (valor)=>{
  //   console.log(valor)
  // }

  // const getProds = async ()=>{
  //   const response = await fetch('https://fakestoreapi.com/products');
  //   const data = await response.json();
  //   return data;
  // }
  // const [product, setProducts] = useState([]);
  // useEffect(()=>{
  //   getProds().then(product =>{
  //     setProducts(product)
  //   })
  // },[product])

  return (
    <ShoppingCartContext>
      <BrowserRouter> 
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/category/:category" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>

            

        </Routes>
      </BrowserRouter>
    </ShoppingCartContext>
  )
}

export default App
