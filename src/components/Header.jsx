import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-izquierda">
        <img src="/img/Logo.png" alt="Logo PNK" className="logo" />
        <div className="titulo">PNK INMOBILIARIA</div>
      </div>
      <nav className="header-derecha">
        <link to="/" className="header-botones">
          Inicio
        </link>
        <a href="#" className="header-botones">
          Registro Propietario
        </a>
        <a href="#" className="header-botones">
          Registro Gestor
        </a>
      </nav>
    </header>
  );
};

export default Header;
