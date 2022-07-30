import axios from 'axios';


const articleService = axios.create({
    baseURL: 'https://62b3425e76028b55ae7149d6.endapi.io',
    timeout: 5500
});

export const getArticlesFromService = async () => {
    let res = await articleService.get('/articles');
    return res.data.data;
}

export const getSingleArticleFromService = async (articleId) => {
    let res = await articleService.get(`/articles/${articleId}`);
    return res.data.data;
}

export const addArticleFromService = async (article) => {
    let res = await articleService.post('/articles', article);
    return res.data.data;
}

export const deleteArticleFromService = async (articleId) => {
    await articleService.delete(`/articles/${articleId}`);
}

export const editArticleFromService = async (article) => {
    let res = await articleService.put(`/articles/${article.id}`, article);
    return res.data.data;
}

export const filterArticleFromService = async (count) => {
    let res = await articleService.get(`/articles?page=1&limit=${count}`);
    return res.data.data;
}


export default articleService;