const Async = () => {
    // const aplicarDescuento = new Promise((res,rej)=>{
    //     const descuento = true;
    //     if(descuento){
    //         res("Descuento aplicado")
    //     } else {
    //         rej("No se pudo aplicar el descuento")
    //     }
    // })
    // console.log(aplicarDescuento)
    // aplicarDescuento.then((res)=>{
    //     console.log(res)
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })

    const productos = [
        {id:1, nombre: "Producto A", descripcion: 'descripcion producto A', stock: 11},
        {id:2, nombre: "Producto B", descripcion: 'descripcion producto B', stock: 55},
        {id:3, nombre: "Producto C", descripcion: 'descripcion producto C', stock: 9},
    ] 

    const getDatos = ()=>{
        return new Promise((resolve,reject)=>{
            if (productos.length === 0) {
                reject(new Error('No hay datos'))
            }
                setTimeout(()=>{
                    resolve(productos);
                },3000)
            })
    }

    getDatos().then(data => console.log(data))

    async function fetchingData(){
        try{
            const datosFetch = await getDatos()
            console.log(datosFetch)
        } catch(e){
            console.log(e)
        }
    }
    fetchingData()

    return (
    <>
        {
            productos.map((p)=>{
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div>
                        <h1>{p.nombre}</h1>
                        <h2>{p.descripcion}</h2>
                        <p>{p.stock}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default Async