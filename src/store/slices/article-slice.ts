import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Article from "@/interfaces/article";

let initialState = {
    list: [] as Article[]
}

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticles: (state, {payload}: PayloadAction<Article[]>) => {
            state.list = payload;
        },
        addArticle: (state, {payload}: PayloadAction<Article>) => {
            state.list.push(payload);
        },
        deleteArticle: (state, {payload}: PayloadAction<number>) => {
            state.list = state.list.filter(article => article.id !== payload)
        },
        editArticle: (state, {payload}: PayloadAction<Article>) => {
            state.list = state.list.map(article => {
                return article.id === payload.id
                    ? {...article, ...payload}
                    : article;
            })
        },
        filterArticle: (state, {payload}: PayloadAction<Article[]>) => {
            state.list = payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setArticles, addArticle, deleteArticle, editArticle, filterArticle} = articleSlice.actions

export default articleSlice.reducer