"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = () => {
    setMenuOpen(false); // Fechar o menu após clicar no link
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/assets/files/img/LogoWhiteCenter.png" alt="Logo" width={156} height={36} className="h-9" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#sobre-mim" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">Home</a>
          <a href="#projetos" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">Projetos</a>
          <a href="#experiencia" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">Experiência</a>
          <a href="#estudos" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">Estudos</a>
          <a href="#skills" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">Skills</a>
          <a href="#contato" className="text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out animate__animated animate__pulse animate__infinite">Contato</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <a href="#sobre-mim" className="block text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out" onClick={handleNavigation}>Home</a>
          <a href="#projetos" className="block text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out" onClick={handleNavigation}>Projetos</a>
          <a href="#experiencia" className="block text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out" onClick={handleNavigation}>Experiência</a>
          <a href="#estudos" className="block text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out" onClick={handleNavigation}>Estudos</a>
          <a href="#skills" className="block text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out" onClick={handleNavigation}>Skills</a>
          <a href="#contato" className="block text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out animate__animated animate__pulse animate__infinite" onClick={handleNavigation}>Contato</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
