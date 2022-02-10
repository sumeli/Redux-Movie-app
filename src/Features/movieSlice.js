import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import MovieApi from '../Common/Apis/MovieApi'
import { APIKey } from '../Common/Apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await MovieApi
        .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
    return response.data
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const response = await MovieApi
        .get(`?apiKey=${APIKey}&s=${term}&type=series`)
    return response.data
})

export const fetchAsyncDetails = createAsyncThunk('movies/fetchAsyncDetails', async (id) => {
    const response = await MovieApi
        .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShows: (state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully")
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully")
            return { ...state, shows: payload };
        },
        [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully")
            return { ...state, selectedMovieOrShow: payload };
        },
    }
});

export const { removeSelectedMovieOrShows } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMoviesandShows = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;