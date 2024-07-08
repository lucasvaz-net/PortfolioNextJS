"use client"; 

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contatos: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white p-8 min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Contato
        </h2>
        <form
          target="_blank"
          action="https://formsubmit.co/contato@lucasvaz.dev.br"
          method="POST"
          className="mt-8 max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold">Nome</label>
            <input type="text" name="name" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold">Email</label>
            <input type="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold">Mensagem</label>
            <textarea name="message" className="w-full p-2 border border-gray-300 rounded-md" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-pulse">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contatos;
