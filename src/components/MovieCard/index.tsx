import { useNavigate } from "react-router-dom";
import { IMovie } from "../../redux/features/movies/moviesSlice";
import * as S from "./styles";

function MovieCard({ title, year, imdbID, type, image }: IMovie) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${imdbID}`);
  };
  return (
    <S.MoviesCardWrapper onClick={handleClick}>
      <S.MoviesCardImage key={imdbID} src={image} />
      <S.MoviesCardTitle>{title}</S.MoviesCardTitle>
    </S.MoviesCardWrapper>
  );
}

export default MovieCard;
