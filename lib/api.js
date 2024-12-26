import axios from 'axios';

const fetchAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchPosts = async () => {
    try {
        const response = await fetchAPI.get('/api/posts?populate[author][populate]=Image&populate=Image&populate[category][fields]=Title');
        return response.data.data;
    } catch (error) {
        console.error('Erro ao buscar os dados do Strapi:', error);
        return [];
    }
};

export const fetchCategories = async () => {
    try {
        const response = await fetchAPI.get('/api/categories?populate=*');
        return response.data.data;
    } catch (error) {
        console.error('Erro ao buscar os dados do Strapi:', error);
        return [];
    }
};

export const fetchAboutPageContent = async () => {
    try {
        const response = await fetchAPI.get('/api/about-page-contents?populate=*');
        return response.data.data;
    } catch (error) {
        console.error('Erro ao buscar os dados do Strapi:', error);
        return [];
    }
};

export const fetchTeam = async () => {
    try {
        const response = await fetchAPI.get('/api/authors?populate=Image');
        return response.data.data;
    } catch (error) {
        console.error('Erro ao buscar os dados do Strapi:', error);
        return [];
    }
};

export default fetchAPI;
