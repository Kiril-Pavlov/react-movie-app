import React from "react";

function Movie(props) {


    return <div className="item">
        <img src={props.movieImg} alt={props.movieTitle} /><br />
        <div className="movie-title">{props.movieTitle}</div>
        <div className="movie-details">
            <div className="movie-genres">{props.movieGenre}</div>
            <div className="movie-rating">{props.movieRating}</div>
        </div>

    </div>
}

export default Movie