// lib/api.js
import axios from 'axios';

const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export const fetchAPI = async (endpoint) => {
    try {
        const response = await axios.get(`${strapiBaseUrl}${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados do Strapi:', error);
        return null;
    }
};
