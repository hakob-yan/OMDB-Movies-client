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
    <S.MoviesCardWrapper onClick={handleClick}>
      <S.AddFavorite src={star} />
      <S.Actions>
        <Button value="Delete" onClick={handleDelete} />
        <Button value="Edit" onClick={handleEdit} />

      </S.Actions>

      <S.MoviesCardImage key={imdbID} src={image} />
      <S.MoviesCardTitle>{title}</S.MoviesCardTitle>
    </S.MoviesCardWrapper>
  );
}

export default MovieCard;
