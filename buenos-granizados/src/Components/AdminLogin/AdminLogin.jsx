import styled from "./AdminLogin.module.css";
import { getActionAdmin, putActionAdminAssetTrue, putActionAdminAssetFalse} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PaginaAdmin from "../PaginaAdmin/PaginaAdmin";
import { Link } from "react-router-dom";
import AdminRegister from "../AdminRegister/AdminRegister";
import Header from "../Header/Header";
const AdminLogin = () => {
  const stateAdmin = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const [admin, setAdmin] = useState({
    user: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (admin.user === stateAdmin.user && admin.password === stateAdmin.password) {
        dispatch(putActionAdminAssetTrue())
        alert("Sesión iniciada");
        window.location.reload();
      } else {
        alert("Usuario o contraseña incorrectos");
       dispatch(putActionAdminAssetFalse())
      }
    } catch (error) {
      alert("Error durante el inicio de sesión");
      console.error("Error durante el inicio de sesión", error);
    }
  };

  useEffect(() => {
    dispatch(getActionAdmin());
  }, [dispatch]);

  return !stateAdmin ? ( <AdminRegister/>) : ( stateAdmin.asset !== true ? (
    <div className={styled.background}>
            <Header/>
      <Link to="/">
      <button className={styled.Binicio}> <h3 className={styled.h3Inicio}>Inicio</h3></button>
      </Link>
      <center>
        <form onSubmit={handleSubmit} className={styled.form}>
          <div className={styled.circuloSuperior}>
          <h2 className={styled.adminH2}>Administrador</h2>
          </div>
          <p>
            <input
              className={styled.inputs}
              value={admin.user}
              onChange={handleChange}
              type="text"
              name="user"
              placeholder="Agrega tu usuario"
              required
            />
          <input 
            className={styled.inputs}
            value={admin.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Agregar contraseña"
            required
          />
          </p>
          <p>
          <button className={styled.buttonLogin}> <h3 className={styled.h3}>Iniciar Sesion</h3></button>
          </p>
        </form>
      </center>
    </div>
  ) : (
    <PaginaAdmin />
  ));
};

export default AdminLogin;