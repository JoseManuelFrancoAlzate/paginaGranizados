 import styled from './AdminRegister.module.css'
 import { useNavigate } from "react-router-dom";
import {  useDispatch } from 'react-redux'
import { postActionAdmin } from '../../Redux/actions'
import { useState } from 'react'
import Header from '../Header/Header';

const AdminRegister = ()=>{
    const navigate = useNavigate()
const dispatch = useDispatch()
const  [admin, setAdmin] = useState({
    user:"",
    password:"",
    repeatPassword: ""
})
const handleChange = (e)=>{
    setAdmin({
        ...admin,
        [e.target.name]: e.target.value
    })
}
const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
        dispatch(postActionAdmin(admin))
        if(admin.password === admin.repeatPassword){
        alert('Administrador creado')
        window.location.reload();
        }
    } catch (error) {
        alert("Error durante el registro");
        console.error("Error durante el registro", error);
    }

}

console.log(navigate);

return(
    <div> 
              <Header/>
        <center>
        <div className={styled.circuloSuperior}>
          <h2 className={styled.adminH2}>Registrar</h2>
          <h2 className={styled.adminH2}>Administrador</h2>
          </div>     
             <form onSubmit={handleSubmit}className={styled.form}>
            <div>
            <p>
            <input  name = "user" onChange={handleChange} type="text" value={admin.user}  className={styled.input} placeholder="Escribe tu nombre de usuario"/>
            </p>
            <p>
            <input name="password" onChange={handleChange} type="password" value={admin.password}className={styled.input} placeholder="Escribe tu contraseña" />
            </p>
            <p>
            <input name="repeatPassword" onChange={handleChange} type="password" value={admin.repeatPassword} className={styled.input} placeholder="Escribe de nuevo tu contraseña"/>
            </p>
           <button className={styled.buttonRegister}> <h3 className={styled.h3Register}>Registrarse</h3></button> 
            </div>
         </form>
        </center>
    </div>
)
}

export default AdminRegister