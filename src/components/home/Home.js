import React, { useEffect,  useState } from 'react'
import {useDispatch} from 'react-redux'
import MovieListing from "../movieListing/MovieListing.js"
import "./home.scss"
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice.js'
const Home = () => {
  
  const [filteredValue,setFilteredValue]=useState("")
  // passing filtered values from search bar to fetch data
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncMovies(filteredValue));
    dispatch(fetchAsyncShows(filteredValue));
  },[dispatch,filteredValue])

  return (
    <div style={{margin:'1rem',textAlign:'center'}}>
      <div  >
        <input type="search" name="moviesSearchBar" id="moviesSearchBar"
        placeholder='Enter movies name..' onChange={(e)=>{
          setFilteredValue(e.target.value)
        }}/>
      </div>
      <MovieListing/>
    </div>
  )
}

export default Home