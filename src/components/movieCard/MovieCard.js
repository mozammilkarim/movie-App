import React from 'react'
import { Link } from "react-router-dom";
import "./movieCard.scss"
const MovieCard = ({title,poster,imdbId,year}) => {
  return (
      <Link to={`/movie/${imdbId}`}>
    <div className="cardItem">
      <div className="cardInner">
        <div className="cardTop">
          <img src={poster} alt="poster" />
        </div>
        <div className="cardBottom">
          <div className="cardInfo">
            <h4>{title}</h4>
            <p>{year  }</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default MovieCard