import axios from '../plugins/axios';

interface AxiosErrorResponse {
  response?: {
    data?: any;
    status?: number;
    statusText?: string;
  };
  message: string;
}

export const getProjetos = async () => {
  try {
    console.log('Fetching projetos...');
    const response = await axios.get('/projeto');
    console.log('Projetos fetched successfully:', response.data);
    return response.data;
  } catch (error: any) { // use "any" to allow unknown type
    const axiosError = error as AxiosErrorResponse;
    console.error('Erro ao buscar projetos:', axiosError.response ? axiosError.response.data : axiosError.message);
    throw axiosError;
  }
};

export const getEstudos = async () => {
  try {
    console.log('Fetching estudos...');
    const response = await axios.get('/estudo');
    console.log('Estudos fetched successfully:', response.data);
    return response.data;
  } catch (error: any) { // use "any" to allow unknown type
    const axiosError = error as AxiosErrorResponse;
    console.error('Erro ao buscar estudos:', axiosError.response ? axiosError.response.data : axiosError.message);
    throw axiosError;
  }
};

export const getExperiencia = async () => {
  try {
    console.log('Fetching experiencias...');
    const response = await axios.get('/experiencia');
    console.log('Experiencias fetched successfully:', response.data);
    return response.data;
  } catch (error: any) { // use "any" to allow unknown type
    const axiosError = error as AxiosErrorResponse;
    console.error('Erro ao buscar experiências:', axiosError.response ? axiosError.response.data : axiosError.message);
    throw axiosError;
  }
};

export const getTecnologias = async () => {
  try {
    console.log('Fetching tecnologias...');
    const response = await axios.get('/tecnologias');
    console.log('Tecnologias fetched successfully:', response.data);
    return response.data;
  } catch (error: any) { // use "any" to allow unknown type
    const axiosError = error as AxiosErrorResponse;
    console.error('Erro ao buscar tecnologias:', axiosError.response ? axiosError.response.data : axiosError.message);
    throw axiosError;
  }
};
