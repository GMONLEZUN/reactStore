// import { useState } from "react"
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {

// [variable, funcionModificadora] = useState(valorInicial)
  // const [nombre, setNombre] = useState('hook');
  // const [contador, setContador] = useState(0);

  return (
    <> 
      <NavBar/>
      <ItemListContainer
        greeting="Bienvenidos a mi tienda"
      />
    </>
  )
}

export default App
