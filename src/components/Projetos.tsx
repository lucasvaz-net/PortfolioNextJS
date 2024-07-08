"use client";

import React, { useEffect, useState } from 'react';
import axios from '../plugins/axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projetos: React.FC = () => {
  const [projetos, setProjetos] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get('/projeto');
        const data = response.data;

        // Ordenar os projetos pela data de início
        data.sort((a: any, b: any) => new Date(a.dataInicio).getTime() - new Date(b.dataInicio).getTime());

        setProjetos(data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjetos();
    setIsClient(true);
  }, []);

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  };

  const getIconPath = (titulo: string) => {
    try {
      return `/assets/files/icon/${titulo.toLowerCase()}.png`;
    } catch (e) {
      console.error(`Ícone não encontrado para: ${titulo}`);
      return '';
    }
  };

  return (
    <section id="projetos" className="bg-gray-800 text-white p-4 min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-4 mt-10">
          <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
          Projetos
        </h2>
        <div className="relative mt-4">
          {isClient && (
            <Carousel
              showArrows={false} // Remove as setas de navegação
              showStatus={false}
              showThumbs={false}
              infiniteLoop // Faz com que o carousel seja infinito
              autoPlay // Começa a passar os slides automaticamente
              interval={3000} // Intervalo entre as transições automáticas (3 segundos)
              transitionTime={800} // Tempo de transição entre os slides (0,8 segundos)
              centerMode // Centraliza os slides
              centerSlidePercentage={100 / 4} // Ajuste para o número de slides por visualização
              stopOnHover={true} // Para o autoplay ao passar o mouse
              className="projetos-carousel"
              emulateTouch // Permite deslizar com o toque ou o mouse
              swipeable // Permite deslizar com o mouse
            >
              {projetos.map((proj: any, index: number) => (
                <div key={index} className="p-2 min-w-[250px]">
                  <div className="bg-gray-700 text-white rounded-lg shadow-md p-4 border border-gray-600 flex flex-col justify-between min-h-[400px]">
                    <div className="flex justify-between items-start">
                      <h5 className="text-xl font-semibold mb-2 text-left w-full">{proj.titulo}</h5>
                      <div className="flex space-x-2">
                        <a href={proj.linkGit} className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                        </a>
                        <a href={proj.linkWeb} className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGlobe} className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center my-4 text-center">
                      <p className="mb-2">{proj.descricao}</p>
                      <p className="mb-2 mt-2">{formatDate(proj.dataInicio)} - {formatDate(proj.dataFinal)}</p>
                    </div>
                    <div className="flex justify-center mt-2 space-x-2">
                      {proj.listaDeTecnologias.map((tec: string) => (
                        <img key={tec} src={getIconPath(tec)} alt={tec} className="w-6 h-6 object-contain" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
