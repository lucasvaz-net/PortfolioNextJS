"use client"; 

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SobreMim: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white p-8 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-1/3 flex justify-center animate__animated animate__pulse animate__infinite animate__slower">
          <Image src="/assets/files/img/avatar.png" alt="Avatar" width={400} height={400} className="w-70 h-70" />
        </div>
        <div className="w-2/3 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Sobre Mim
          </h2>
          <p className="text-lg mb-4">
            Olá! Eu sou o Lucas, um profissional de TI que adora explorar novas tecnologias. Atuo há mais de 5 anos na área de Tecnologia da Informação, com experiência em liderança de equipes, administração de banco de dados SQL, desenvolvimento em C# (.NET Core e Framework), suporte a sistemas, manutenção de hardware e projetos de rede.
          </p>
          <p className="text-lg mb-4">
            Destaco minha habilidade em solucionar problemas e adaptabilidade. Tenho também familiaridade com desenvolvimento em Node.js, bancos de dados NoSQL (MongoDB), consumo de API com Python e desenvolvimento em Java.
          </p>
          <p className="text-lg mb-4">
            Se quiser bater um papo, trocar ideias ou até mesmo colaborar em algum projeto, pode ver meu <a href="https://lucasvaz.dev.br/curriculo.pdf" target='_blank' className="text-blue-400">currículo</a>. Fique à vontade para entrar em contato! Pode me mandar um e-mail para <a href="mailto:contato@lucasvaz.dev.br" className="text-blue-400">contato@lucasvaz.dev.br</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
