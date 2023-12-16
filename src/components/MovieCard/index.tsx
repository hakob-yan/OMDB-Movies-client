import React from "react";
import { IMovie } from "../../redux/features/movies/moviesSlice";

function MovieCard({ title, year, imdbID, type, image }: IMovie) {
  return <div key={imdbID}>MovieCard</div>;
}

export default MovieCard;
