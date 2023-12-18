import { useNavigate } from "react-router-dom";
import { IMovie, deleteMovie } from "../../redux/features/movies/moviesSlice";
import star from "../../assets/images/favorite.svg";
import * as S from "./styles";
import Button from "../Button";
import { useState } from "react";
import Modal from "../DeleteModal";
import { deleteMovieById } from "../../api";
import { useAppDispatch } from "../../hooks/useAppDispatch";

function MovieCard({
  title,
  imdbID,
  image,
}: {
  title: string;
  imdbID: string;
  image: string;
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
    await deleteMovieById(imdbID);
    dispatch(deleteMovie(imdbID));
    setIsDeleteModalOpen(false);
  };

  return (
    <S.MoviesCardWrapper>
      <Modal
        confirm={handleMovieDelete}
        isOpen={isDeleteModalOpen}
        close={() => setIsDeleteModalOpen(false)}
      />
      <S.AddFavorite src={star} />
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
