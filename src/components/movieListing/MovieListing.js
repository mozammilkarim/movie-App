import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from "../movieCard/MovieCard.js"
import "./movieListing.scss" 
const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  
  // a general function to render the movies or shows cards
  function myGeneralMapper(items) {
    // here items is the array of objects passed
    let renderItems=[]
    if (items.Response === "True") {
      items.Search.map((item, index) => {
        // console.log(item);
        renderItems.push(
        <MovieCard key={item.Title} title={item.Title} 
        poster={item.Poster} imdbId={item.imdbID} year={item.Year}/>);
      });
    }
    else{
      renderItems.push(<div>No Result ...</div>)
    }
    return renderItems;
  }
    
  return <div>
    <div className="movieWrapper">
      <div className="movieList">Movies</div>
      <div className="movieContainer">
        {myGeneralMapper(movies)}
      </div>
    </div>
    <div className="movieWrapper">
      <div className="movieList">Shows</div>
      <div className="movieContainer">
        {myGeneralMapper(shows)}
      </div>
    </div>
  </div>
}

export default MovieListing