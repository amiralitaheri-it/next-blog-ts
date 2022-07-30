import {configureStore} from '@reduxjs/toolkit'
import articleReducer from './slices/article-slice'
import loadingReducer from './slices/loading-slice'

export const store = configureStore({
    reducer: {
        articles: articleReducer,
        loading: loadingReducer
    },
})