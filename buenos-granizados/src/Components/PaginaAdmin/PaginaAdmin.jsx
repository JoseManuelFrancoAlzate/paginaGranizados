import { useSelector,useDispatch } from "react-redux"
import { postActionSlushys, putActionAdminAssetFalse } from "../../Redux/actions";
import { useState } from "react";

import { Link } from "react-router-dom";
import Header from "../Header/Header";
import styled from "./PaginaAdmin.module.css"

const PaginaAdmin =()=>{
const stateAdmin = useSelector((state)=>state.admin)
const dispatch = useDispatch()
const [slushy, setSlushy] = useState({
    name:"",
    image:"",
    price:"",
    description:""
}) 

const handleChange = (e)=>{
    setSlushy({
        ...slushy,
        [e.target.name]: e.target.value
    })
}

const handleChangeImage = (e)=>{
    const file = e.target.files[0]
    console.log(file)
setSlushy({
    ...slushy,
    image:file
})
}

const handleSignOff = ()=>{
    dispatch(putActionAdminAssetFalse())
    window.location.reload();
}

const handleSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData()
    formData.append('name', slushy.name)
    formData.append('image',slushy.image)
    formData.append('price', slushy.price)
    formData.append('description', slushy.description)
    dispatch(postActionSlushys(formData))
}

console.log(slushy)
    return(
<div>
<Header/>
<Link to="/home">
      <button className={styled.Binicio}> <h3 className={styled.h3Inicio}>Inicio</h3></button>
      </Link>
      <button onClick={handleSignOff} className={styled.BCerrar}><h3 className={styled.h3Cerrar}>Cerrar sesion</h3></button>
    <center>
        <Link to="/settings">
    <img className={styled.engranaje} alt="engranaje" src="./engranaje.png"/>
    </Link>
    <h1 className={styled.presentacion}> 
      Hola! {stateAdmin.user}
    </h1>
    <h2 className={styled.h2Crea}>
        Crea tu granizado
    </h2>
    <form  onSubmit={handleSubmit} className={styled.form}>
        <div className={styled.contenidoForm}>
        <div className={styled.divImg}>
          <h4 className={styled.h4Img}>Agrega imagen del granizado</h4>
           <p>
            <input  onChange={handleChangeImage} className={styled.inputFile} type="file" name="image" required/>
           </p>
           </div>
           <div className={styled.divInputs}>
        <input   value={slushy.name} onChange={handleChange} type="text" name="name"className={styled.inputs} placeholder="Agrega el nombre del granizado" required/>
         <input  value={slushy.price} onChange={handleChange} type="number" min="0" name="price" className={styled.inputs} placeholder="Agrega el precio del granizado" required/>
         <textarea value= {slushy.description} onChange={handleChange} type="text" name="description" className={styled.inputsDescription} placeholder="Agrega la descripcion del granizado" rows={4} // Define el número de filas  
         cols={50} // Define el número de columnas  required // Hace que el campo sea obligatorio
        required/>
         <p>
            <button className={styled.BCrear}><h3 className={styled.h3crear}>Crear Granizado</h3></button>
         </p>
         </div>
         </div>
    </form>
    </center>
</div>
    )
}


export default PaginaAdmin