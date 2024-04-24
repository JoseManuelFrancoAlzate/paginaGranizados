import { useSelector,useDispatch } from "react-redux";
import { postActionSlushys } from "../../Redux/actions";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "./PaginaAdmin.module.css"

const PaginaAdmin =()=>{
const stateAdmin = useSelector((state)=>state.admin)
const dispatch = useDispatch()
const [slushy, setSlushy] = useState({
    name:"",
    image:"",
    price:""
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

const handleSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData()
    formData.append('name', slushy.name)
    formData.append('image',slushy.image)
    formData.append('price', slushy.price)
    dispatch(postActionSlushys(formData))
}

console.log(slushy)
    return(
<div>
<Link to="/home">
      <button className={styled.Binicio}> <h3 className={styled.h3Inicio}>Inicio</h3></button>
      </Link>
    <center>
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