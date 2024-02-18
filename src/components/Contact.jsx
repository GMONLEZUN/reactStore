// se puede usar react-hook-form

import { useState } from "react";

const Contact = () => {

  const [valores, setValores] = useState({nombre:"",email:""});
  const handleValores = (e)=>{
    setValores({
      ...valores, 
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valores)

  }
  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="Ingresa tu nombre" value={valores.nombre} onChange={handleValores} name="nombre"/> 
        <input type="text" placeholder="Ingresa tu email" value={valores.email} onChange={handleValores} name="email"/> 
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contact