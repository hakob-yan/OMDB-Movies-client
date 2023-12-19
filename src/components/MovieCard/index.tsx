import { useNavigate } from "react-router-dom";
import { deleteMovie } from "../../redux/features/movies/moviesSlice";
import starOn from "../../assets/images/favorite.svg";
import starOff from "../../assets/images/favorite-off.svg";
import * as S from "./styles";
import Button from "../Button";
import { useState } from "react";
import Modal from "../DeleteModal";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toast } from "react-toastify";

function MovieCard({
  title,
  imdbID,
  image,
  isFavorite,
}: {
  title: string;
  imdbID: string;
  image: string;
  isFavorite: boolean;
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleClick = () => {
    navigate(`/movie/${imdbID}`);
  };
  const handleEdit = () => {};
  const handleDeleteOpen = () => setIsDeleteModalOpen(true);
  const handleMovieDelete = async () => {
    dispatch(deleteMovie(imdbID));
    setIsDeleteModalOpen(false);
    toast("Movie Deleted");
  };
  const handleToggleFavorite = () => {
    toast("Added to Favorite Movies");
  };
  return (
    <S.MoviesCardWrapper>
      <Modal
        confirm={handleMovieDelete}
        isOpen={isDeleteModalOpen}
        close={() => setIsDeleteModalOpen(false)}
      />
      <S.AddFavorite
        src={isFavorite ? starOn : starOff}
        onClick={handleToggleFavorite}
      />
      <S.MoviesCardImage key={imdbID} src={image} onClick={handleClick} />
      <S.Actions>
        <Button value="Delete" onClick={handleDeleteOpen} />
        <Button value="Edit" onClick={handleEdit} />
      </S.Actions>

      <S.MoviesCardTitle>{title}</S.MoviesCardTitle>
    </S.MoviesCardWrapper>
  );
}

export default MovieCard;
