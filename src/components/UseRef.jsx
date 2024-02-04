import { useRef } from "react"

const UseRef = () => {
    const inputRef = useRef(null);
    const handleFocus = ()=>{
        inputRef.current.innerHTML= 'agrego contenido';
    }
  return (
    <div>
        <div ref={inputRef}>Contenido Original</div>
        <button
        onClick={handleFocus}
        >Click me</button>
    </div>
  )
}

export default UseRef