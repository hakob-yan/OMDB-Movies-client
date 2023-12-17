import { IMovie } from "../../redux/features/movies/moviesSlice";
import * as S from "./styles";

function MovieCard({ title, year, imdbID, type, image }: IMovie) {
  
  return (
    <S.MoviesCardWrapper>
      <S.MoviesCardImage key={imdbID} src={image} />
      <S.MoviesCardTitle>{title}</S.MoviesCardTitle>
    </S.MoviesCardWrapper>
  );
}

export default MovieCard;
