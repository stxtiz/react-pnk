import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-izquierda">
          <img src="/img/Logo.png" alt="Logo PNK" className="logo-footer" />
          <div className="titulo-footer">PNK INMOBILIARIA</div>
        </div>
        <nav className="footer-centro">
          <a href="#" className="enlace-footer">
            Registro Propietario
          </a>
          <a href="#" className="enlace-footer">
            Registro Gestor
          </a>
          <a href="#" className="enlace-footer">
            Registro Usuario
          </a>
        </nav>
        <nav className="footer-derecha">
          <a
            href="https://www.instagram.com/tioreneoficial_/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/logo-insta.png"
              alt="Logo instagram"
              className="logo-footer"
            />
          </a>
          <a
            href="https://www.ticketmaster.cl/event/popin-un-show-muy-penca-centro-cultural-san-gines"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/linkedin.png"
              alt="Logo Linkedin"
              className="logo-footer"
            />
          </a>
        </nav>
      </footer>
      <div className="copyright">
        &copy; 2025 Todos los derechos Reservados PNK Inmobiliaria
      </div>
    </>
  );
};
export default Footer;
