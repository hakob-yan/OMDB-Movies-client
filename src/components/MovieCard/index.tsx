import { useNavigate } from "react-router-dom";
import { IMovie } from "../../redux/features/movies/moviesSlice";
import star from "../../assets/images/favorite.svg";
import * as S from "./styles";
import Button from "../Button";

function MovieCard({ title, year, imdbID, type, image }: IMovie) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${imdbID}`);
  };
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <S.MoviesCardWrapper>
      <S.AddFavorite src={star} />
      <S.MoviesCardImage key={imdbID} src={image} onClick={handleClick} />
      <S.Actions>
        <Button value="Delete" onClick={handleDelete} />
        <Button value="Edit" onClick={handleEdit} />
      </S.Actions>

      <S.MoviesCardTitle>{title}</S.MoviesCardTitle>
    </S.MoviesCardWrapper>
  );
}

export default MovieCard;
