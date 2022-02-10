//Creating a redux store to keep all the movies here

import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movieSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
})