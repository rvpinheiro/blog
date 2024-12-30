export const mockData = {
    posts: [
        {
            id: 1,
            Title: 'Post 1',
            Image: {
                formats: {
                    large: { url: 'https://via.placeholder.com/600x400' },
                },
            },
            author: {
                Name: 'Autor 1',
                Image: {
                    formats: {
                        thumbnail: { url: 'https://via.placeholder.com/50' },
                    },
                },
            },
            Date: '2024-12-01',
            category: {
                Title: 'Categoria 1',
                id: 1,
            },
            Content: [
                { children: [{ text: 'Este é o conteúdo do post 1.' }] }
            ],
            slug: 'post-1',
        },
        {
            id: 2,
            Title: 'Post 2',
            Image: {
                formats: {
                    large: { url: 'https://via.placeholder.com/600x400' },
                },
            },
            author: {
                Name: 'Autor 2',
                Image: {
                    formats: {
                        thumbnail: { url: 'https://via.placeholder.com/50' },
                    },
                },
            },
            Date: '2024-12-02',
            category: {
                Title: 'Categoria 2',
                id: 2,
            },
            Content: [
                { children: [{ text: 'Este é o conteúdo do post 2.' }] }
            ],
            slug: 'post-2',
        },
    ],

    categories: [
        {
            id: 1,
            Title: 'Categoria 1',
            Image: {
                formats: {
                    thumbnail: { url: 'https://via.placeholder.com/400x200' },
                },
            },
            slug: 'categoria-1',
        },
        {
            id: 2,
            Title: 'Categoria 2',
            Image: {
                formats: {
                    thumbnail: { url: 'https://via.placeholder.com/400x200' },
                },
            },
            slug: 'categoria-2',
        },
    ],

    aboutContent: {
        AboutTextTitle: 'Sobre Nós',
        AboutTextSubtitle: 'Somos uma equipa dedicada a...',
        AboutImage1: { url: 'https://via.placeholder.com/400x300' },
        AboutImage2: { url: 'https://via.placeholder.com/400x300' },
        AboutImage3: { url: 'https://via.placeholder.com/400x300' },
        AboutImage4: { url: 'https://via.placeholder.com/400x300' },
        AboutImage5: { url: 'https://via.placeholder.com/400x300' },
    },

    teamMembers: [
        {
            Name: 'Membro 1',
            Role: 'Função 1',
            Bio: 'Bio do Membro 1.',
            Image: { formats: { large: { url: 'https://via.placeholder.com/100x100' } } },
        },
        {
            Name: 'Membro 2',
            Role: 'Função 2',
            Bio: 'Bio do Membro 2.',
            Image: { formats: { large: { url: 'https://via.placeholder.com/100x100' } } },
        },
    ],

    blogPosts: [
        {
            id: 1,
            Title: 'Post de Blog 1',
            Image: {
                formats: {
                    large: { url: 'https://via.placeholder.com/600x400' },
                },
            },
            author: {
                Name: 'Autor do Blog 1',
                Image: {
                    formats: {
                        thumbnail: { url: 'https://via.placeholder.com/50' },
                    },
                },
            },
            Date: '2024-12-01',
            category: {
                Title: 'Categoria Blog 1',
                id: 1,
            },
            slug: 'blog-post-1',
        },
        {
            id: 2,
            Title: 'Post de Blog 2',
            Image: {
                formats: {
                    large: { url: 'https://via.placeholder.com/600x400' },
                },
            },
            author: {
                Name: 'Autor do Blog 2',
                Image: {
                    formats: {
                        thumbnail: { url: 'https://via.placeholder.com/50' },
                    },
                },
            },
            Date: '2024-12-02',
            category: {
                Title: 'Categoria Blog 2',
                id: 2,
            },
            slug: 'blog-post-2',
        },
    ],
};
