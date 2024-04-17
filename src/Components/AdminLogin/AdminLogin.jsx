import styled from "./AdminLogin.module.css"

const AdminLogin =()=>{
return(
    <div>
        <center>
        <form className={styled.form}>
        <div className={styled.circuloSuperior}></div>

            <p>
            <input className={styled.inputs} type="text" name="user" placeholder="agrega tu usuario" required/>
            </p>
            <input className={styled.inputs} type="password" name="password" placeholder="agregar contraseña" required/>

<button className={styled.buttonLogin}>
    Hola
</button>
        </form>
        </center>
    </div>
)
}


export default AdminLogin