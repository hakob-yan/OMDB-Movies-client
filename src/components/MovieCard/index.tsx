import { IMovie } from "../../redux/features/movies/moviesSlice";
import * as S from "./styles";

function MovieCard({ title, year, imdbID, type, image }: IMovie) {
  return <S.MoviesCardWrapper key={imdbID}>MovieCard</S.MoviesCardWrapper>;
}

export default MovieCard;
