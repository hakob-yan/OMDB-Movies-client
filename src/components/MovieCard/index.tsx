import { useNavigate } from "react-router-dom";
import { IMovie } from "../../redux/features/movies/moviesSlice";
import star from "../../assets/images/favorite.svg";
import * as S from "./styles";
import Button from "../Button";
import { useState } from "react";
import Modal from "../Modal";
import { deleteMovieById } from "../../api";

function MovieCard({ title, year, imdbID, type, image }: IMovie) {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleClick = () => {
    navigate(`/movie/${imdbID}`);
  };
  const handleEdit = () => {};
  const handleDeleteOpen = () => setIsDeleteModalOpen(true);
  const handleMovieDelete = async () => {
    await deleteMovieById(imdbID);
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
