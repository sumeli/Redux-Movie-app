import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/movieSlice'
import './Header.scss'

const Header = () => {

    const [term, setTerm] = useState("")
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        if (term === "")
            return alert("Search Bar is empty! Please Enter a Movie or Show name.")
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
    }

    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/">
                    Redux Movie App
                </Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={term}
                        placeholder="Search Movies or Shows"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button>
                        <i className='fa fa-search'></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Header