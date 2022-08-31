import React from "react";

import "./Movie.css"

function Movie(props) {

    return <div className="movie-item">
        <img src={props.movieImg} alt={props.movieTitle} /><br />
        <div className="movie-title">{props.movieTitle}</div>
        <div className="movie-details">
            <div className="movie-genres">{props.movieGenre.join(" ")}</div>
            <div className={props.movieRating>7 ? "movie-rating green": "movie-rating red"}>{props.movieRating}</div>
        </div>

    </div>
}

export default Movie