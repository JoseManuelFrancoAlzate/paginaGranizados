import React, { useState } from 'react';
import styled from './Configuracion.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { restartActionPage, deleteImgsFolder, deleteActionAdmin, getActionAdmin } from '../../Redux/actions';
const Configuracion = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const adminData = useSelector(state => state.admin)
  const [confirmDeleteAdmin, setConfirmDeleteAdmin] = useState(false)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  console.log(adminData)
  const handleDeleteAdminButton = ()=>{
    setConfirmDeleteAdmin(true);
  }

  const handleCancelDeleteAdminButtom = ()=>{
    setConfirmDeleteAdmin(false)
  }

  const handleConfirmDeleteAdmin = () => {
    if (adminData) {
      dispatch(deleteActionAdmin(adminData._id));
      alert('Administrador eliminado');
      navigate('/');
    } else {
      alert('No hay ningún administrador');
      navigate('/');

    }
  };
const handleRestartButtonClick = () => {
    setShowConfirmationModal(true);
  };

  const handleCancelRestart = () => {
    setShowConfirmationModal(false);
  };

  const handleConfirmRestart = () => {
    dispatch(restartActionPage())
   navigate('/')
  };

  const handlerDeleteImgs = ()=>{
    dispatch(deleteImgsFolder())
  }
    
  
  useEffect(()=>{
dispatch(getActionAdmin())
  },[dispatch])

  return (
    <div>
      <h1 className={styled.settings}>Configuración</h1>
      <p>
        <Link to='/admin'>
          <button className={styled.buttonAdmin}> <h3>Volver a la página anterior</h3></button>
        </Link>
      </p>
      <p>
        <button onClick={handlerDeleteImgs}className={styled.buttonBorrarImgs}> <h2>Limpiar carpeta local de imagenes </h2></button>
      </p>
      <p>
      <button onClick={handleDeleteAdminButton} className={styled.buttonEliminarAdmin}><h2>Eliminar Admin</h2></button>
      </p>
      {
            confirmDeleteAdmin && (<div className={styled.modalBackdrop}>
              <div className={styled.modal}>
                <div className={styled.modalContent}>
                  <h2>Confirmar acción</h2>
                  <p>¿Seguro que quieres Eliminar el administrador?</p>
                  <p>(Cabe aclarar que esto no eliminara tus granizados, solo deberas volver a registrarte)</p>
                  <div className={styled.modalButtons}>
                    <button onClick={handleConfirmDeleteAdmin} className={styled.confirmButton}>Aceptar</button>
                    <button onClick={handleCancelDeleteAdminButtom} className={styled.cancelButton}>Cancelar</button>
                  </div>
                </div>
              </div>
            </div>)
      }
      <button onClick={handleRestartButtonClick} className={styled.buttonRestart}><h2>Reiniciar Página web</h2></button>
      {showConfirmationModal && (
        <div className={styled.modalBackdrop}>
          <div className={styled.modal}>
            <div className={styled.modalContent}>
              <h2>Confirmar acción</h2>
              <p>¿Seguro que quieres reiniciar la página? Esto eliminará todos los granizados creados y el administrador, por lo que tendrás que volver a registrarte.</p>
              <div className={styled.modalButtons}>
                <button onClick={handleConfirmRestart} className={styled.confirmButton}>Aceptar</button>
                <button onClick={handleCancelRestart} className={styled.cancelButton}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Configuracion;

