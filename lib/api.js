import axios from 'axios';

const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export const fetchAPI = async (endpoint) => {
    try {
        const url = `${strapiBaseUrl}${endpoint}`
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error('Erro ao buscar dados.', error.message);
        return [];
    }
};
