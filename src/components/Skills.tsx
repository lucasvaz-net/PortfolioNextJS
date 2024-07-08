"use client";  // Adicione esta linha

import React, { useEffect, useState } from 'react';
import axios from '../plugins/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface Tecnologia {
  id: number;
  titulo: string;
  tipo: string;
  nivelHabilidade: number;
}

const SkillsPage: React.FC = () => {
  const [tecnologias, setTecnologias] = useState<Tecnologia[]>([]);
  const [tecnologiasFiltradasOrdenadas, setTecnologiasFiltradasOrdenadas] = useState<Tecnologia[]>([]);

  useEffect(() => {
    const fetchTecnologias = async () => {
      try {
        const response = await axios.get('/tecnologias');
        setTecnologias(response.data);
        setTecnologiasFiltradasOrdenadas(filtrarEOrdenarTecnologias(response.data));
      } catch (error) {
        console.error('Erro ao carregar tecnologias:', error);
      }
    };

    fetchTecnologias();
  }, []);

  const getIconPath = (titulo: string) => {
    try {
      return `/assets/files/icon/${titulo.toLowerCase()}.png`;
    } catch (e) {
      console.error(`Ícone não encontrado para: ${titulo}`);
      return '';
    }
  };

  const filtrarEOrdenarTecnologias = (tecnologias: Tecnologia[]) => {
    const ordemTipos = ["Banco de Dados", "Back-End", "Front-End", "Ferramenta", "Versionamento", "Cloud"];
    return tecnologias
      .filter(tech => ordemTipos.includes(tech.tipo))
      .sort((a, b) => ordemTipos.indexOf(a.tipo) - ordemTipos.indexOf(b.tipo));
  };

  const getNivelHabilidadeText = (nivelHabilidade: number) => {
    if (nivelHabilidade <= 20) {
      return 'Aspirante';
    } else if (nivelHabilidade <= 40) {
      return 'Familiarizado';
    } else if (nivelHabilidade <= 60) {
      return 'Junior';
    } else if (nivelHabilidade <= 80) {
      return 'Pleno';
    } else {
      return 'Senior';
    }
  };

  return (
    <section className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Skills
        </h2>
        <div className="flex flex-wrap justify-center">
          {tecnologiasFiltradasOrdenadas.map((tech) => (
            <div
              key={tech.id}
              className="w-28 p-2 m-2 text-center transition-transform transform hover:scale-110 rounded-lg bg-gray-700 shadow-lg"
            >
              <img src={getIconPath(tech.titulo)} alt={tech.titulo} className="w-20 h-20 mb-2 mx-auto" />
              <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${tech.nivelHabilidade}%` }}
                ></div>
              </div>
              <p className="text-sm mt-2">{getNivelHabilidadeText(tech.nivelHabilidade)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
