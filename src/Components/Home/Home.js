import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/movieSlice'

const Home = () => {

    const dispatch = useDispatch()
    const movieText = "Harry"
    const showText = "Friends"

    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))
    }, [dispatch])

    return (
        <div className='home'>
            <MovieListing />
        </div>
    )
}

export default Home