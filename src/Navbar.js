import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa un archivo CSS para estilos personalizados


const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Sobre nosotros</Link>
        <Link to="/menu">Nuestro menú</Link>
        <Link to="/reservar">Reservaciones</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;


