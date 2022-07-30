import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    list: []
}

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticles: (state, {payload}) => {
            state.list = payload;
        },
        addArticle: (state, {payload}) => {
            state.list.push(payload);
        },
        deleteArticle: (state, {payload}) => {
            state.list = state.list.filter(article => article.id !== payload)
        },
        editArticle: (state, {payload}) => {
            state.list = state.list.map(article => {
                return article.id === payload.id
                    ? {...article, ...payload}
                    : article;
            })
        },
        filterArticle: (state, {payload}) => {
            state.list = payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setArticles, addArticle, deleteArticle, editArticle, filterArticle} = articleSlice.actions

export default articleSlice.reducer