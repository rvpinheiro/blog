import axios from 'axios';
import { mockData } from '../data/mockData';
import { useMockData } from '../config/config';

const fetchAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Funções para buscar dados com base na flag de mock (useMockData)

export const fetchPosts = async () => {
    if (useMockData) {
        return mockData.posts; // Retorna os posts mockados se a flag for 'true'
    }

    try {
        const response = await fetchAPI.get('/api/posts?populate[author][populate]=Image&populate=Image&populate[category][fields]=Title');
        return response.data.data;
    } catch (error) {
        console.error('Erro ao buscar os dados do Strapi:', error);
        return [];
    }
};

export const fetchCategories = async () => {
    if (useMockData) {
        return mockData.categories; // Retorna as categorias mockadas se a flag for 'true'
    }

    try {
        const response = await fetchAPI.get('/api/categories?populate=*');
        return response.data.data;
    } catch (error) {
        console.error('Erro ao buscar os dados do Strapi:', error);
        return [];
    }
};

export const fetchAboutPageContent = async () => {
    if (useMockData) {
        return [mockData.aboutContent]; // Retorna o conteúdo sobre nós mockado se a flag for 'true'
    }

    try {
        const response = await fetchAPI.get('/api/about-page-contents?populate=*');
        return response.data.data;
    } catch (error) {
        console.error('Erro ao buscar os dados do Strapi:', error);
        return [];
    }
};

export const fetchTeam = async () => {
    if (useMockData) {
        return mockData.teamMembers; // Retorna os membros da equipa mockados se a flag for 'true'
    }

    try {
        const response = await fetchAPI.get('/api/authors?populate=Image');
        return response.data.data;
    } catch (error) {
        console.error('Erro ao buscar os dados do Strapi:', error);
        return [];
    }
};

export default fetchAPI;
