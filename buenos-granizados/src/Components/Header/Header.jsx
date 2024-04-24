import React from 'react';
import styles from './Header.module.css'; // Importa los estilos del archivo de módulos

function Header() {
  return (
    <header className={styles.header}>
   <center>
    <h1 className={styles.rc}>BUENOS GRANIZADOS</h1>
   </center>
    </header>
  );
}

export default Header;
