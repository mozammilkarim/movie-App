import React from 'react'
import { Link } from "react-router-dom";
import "./movieCard.scss"
const MovieCard = ({ title, poster, imdbId, year }) => {
  return (
    <div style={{border:'2px solid',borderRadius:'2px'}} className="cardItem">


      <Link to={`/movie/${imdbId}`} style={{backgroundImage:`${poster}`}} >

        <div className="cardTop">
          <img src={poster} alt="poster" />
        </div>

        <div className="cardInfo" style={{ textAlign: 'center', color: 'white' }}>
          <h4>{title}</h4>
          <p>{year}</p>
        </div>


      </Link>
    </div>
  )
}

export default MovieCard