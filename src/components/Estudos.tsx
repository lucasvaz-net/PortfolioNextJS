"use client";

import React, { useEffect, useState } from 'react';
import axios from '../plugins/axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Estudos: React.FC = () => {
  const [estudos, setEstudos] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const fetchEstudos = async () => {
      try {
        const response = await axios.get('/estudo');
        const data = response.data;

        // Ordenar os estudos pela data de início
        data.sort((a: any, b: any) => new Date(a.dataInicio).getTime() - new Date(b.dataInicio).getTime());

        setEstudos(data);
      } catch (error) {
        console.error('Erro ao buscar estudos:', error);
      }
    };

    fetchEstudos();
    setIsClient(true);
  }, []);

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit' }; // Ajuste para exibir apenas mês e ano
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
    <section id="estudos" className="bg-gray-900 text-white p-4 min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-4 mt-10">
          <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
          Estudos
        </h2>
        <div className="relative mt-4">
          {isClient && (
            <Carousel
              showArrows={false} // Remove as setas de navegação
              showStatus={false}
              showThumbs={false} 
              infiniteLoop 
              autoPlay 
              interval={3000} 
              transitionTime={800}
              centerMode
              centerSlidePercentage={100 / 4} 
              stopOnHover={true} // Para o autoplay ao passar o mouse
              className="estudos-carousel"
              emulateTouch 
              swipeable 
            >
              {estudos.map((estudo: any, index: number) => (
                <div key={index} className="p-2 min-w-[250px]">
                  <div className="bg-gray-700 text-white rounded-lg shadow-md p-4 border border-gray-600 flex flex-col justify-between min-h-[400px]">
                    <div className="flex justify-between items-start">
                      <h5 className="text-xl font-semibold mb-2 text-right w-full">{estudo.titulo}</h5>
                    </div>
                    <div className="flex-1 flex flex-col justify-center my-4 text-center">
                      <p className="mb-2">{estudo.descricao}</p>
                      <p className="mb-2"><strong>Local:</strong> {estudo.local}</p>
                      <p className="mb-2 mt-2">{formatDate(estudo.dataInicio)} - {formatDate(estudo.dataFinal)}</p>
                    </div>
                    <div className="flex justify-center mt-2 space-x-2">
                      {estudo.listaDeTecnologias.map((tec: string) => (
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

export default Estudos;
