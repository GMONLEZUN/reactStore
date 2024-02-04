import { useEffect, useState } from "react"

const UseEffect = () => {
    const [mensaje, setMensaje] = useState("Mensaje inicial")
    
    useEffect(()=>{
        console.log('efecto secundario')
    },[mensaje])

    return (
        <div>
            <p>{mensaje}</p>
            <button onClick={()=>{setMensaje("Nuevo mensaje")}}>Cambiar</button>
        </div>

    )
}

export default UseEffect