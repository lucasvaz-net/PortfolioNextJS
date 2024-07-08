"use client"; 

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center p-4 shadow-lg">
      <div className="flex justify-center space-x-4 mb-2">
        <a
          href="https://www.linkedin.com/in/lucasvazti/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out transform hover:scale-110"
        >
          <Image src="/assets/files/icon/linkedin.png" alt="LinkedIn" width={24} height={24} className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/5573999326446?text=Ol%C3%A1%20Lucas"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out transform hover:scale-110"
        >
          <Image src="/assets/files/icon/whatsapp.png" alt="WhatsApp" width={24} height={24} className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/lucasvaz-net/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out transform hover:scale-110"
        >
          <Image src="/assets/files/icon/git.png" alt="GitHub" width={24} height={24} className="h-6 w-6" />
        </a>
        <a
          href="mailto:contato@lucasvaz.dev.br"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out transform hover:scale-110"
        >
          <Image src="/assets/files/icon/email.png" alt="Email" width={24} height={24} className="h-6 w-6" />
        </a>
      </div>
      <p className="mt-2">&copy; 2024 Lucas Vaz</p>
    </footer>
  );
};

export default Footer;
