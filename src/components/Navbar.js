import React, { useState } from 'react';
import NavButton from './NavButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 md:h-40 flex items-center">
      <div className="max-w-7xl mx-auto flex justify-start items-center"> {/* Cambia justify-between a justify-start */}
        <div className="text-white font-bold text-xl flex-1">Mi Sitio Web</div> {/* Agrega la clase flex-1 al elemento de texto */}
        {/* Menú en dispositivos móviles */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              ) : (
                <path d="M0 0h24v24H0z" fill="none" />
              )}
            </svg>
          </button>
        </div>
        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-4">
          <NavButton link="#" text="Inicio" />
          <NavButton link="#" text="Nosotros" />
          <NavButton link="#" text="Hogar" />
          <NavButton link="#" text="Industria" />
          <NavButton link="#" text="Contacto" />
          <NavButton link="#" text="Proyectos" />
        </div>
        {/* Menú desplegable en dispositivos móviles */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 px-4 py-2">
            <NavButton link="#" text="Inicio" />
            <NavButton link="#" text="Nosotros" />
            <NavButton link="#" text="Hogar" />
            <NavButton link="#" text="Industria" />
            <NavButton link="#" text="Contacto" />
            <NavButton link="#" text="Proyectos" />
          </div>
        )}
        <div className="flex items-center mx-4">
          <input
            type="text"
            placeholder="Buscar"
            className="bg-white text-black rounded-md py-1 px-2 mr-2 hidden md:block"
          />
          <button className="bg-white text-black rounded-md py-1 px-2 hidden md:block">
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
