import { useNavigate } from "react-router-dom";
import {
  deleteMovie,
  updateMovie,
} from "../../redux/features/movies/moviesSlice";
import starOn from "../../assets/images/favorite.svg";
import starOff from "../../assets/images/favorite-off.svg";
import * as S from "./styles";
import Button from "../Button";
import { useState } from "react";
import DeleteModal from "../DeleteModal";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import MovieModal from "../MovieModal";

import { toast } from "react-toastify";

function MovieCard({
  title,
  year,
  genre,
  runtime,
  director,
  imdbID,
  image,
  isFavorite,
}: {
  title: string;
  year: string;
  genre: string;
  runtime: string;
  director: string;
  imdbID: string;
  image: string;
  isFavorite: boolean;
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleClick = () => {
    navigate(`/movie/${imdbID}`);
  };
  const handleEdit = () => setIsEditModalOpen(true);
  const handleDeleteOpen = () => setIsDeleteModalOpen(true);
  const handleMovieDelete = async () => {
    dispatch(deleteMovie(imdbID));
    setIsDeleteModalOpen(false);
    toast("Movie Deleted");
  };
  const handleToggleFavorite = () => {
    dispatch(
      updateMovie({
        id: imdbID,
        data: {
          is_favorite: !isFavorite,
        },
      })
    );
    toast("Toggled Favorites");
  };
  return (
    <S.MoviesCardWrapper>
      <DeleteModal
        confirm={handleMovieDelete}
        isOpen={isDeleteModalOpen}
        close={() => setIsDeleteModalOpen(false)}
      />
      <MovieModal
        data={{
          title,
          year,
          runtime,
          director,
          genre,
          movieId: imdbID,
        }}
        isOpen={isEditModalOpen}
        close={() => setIsEditModalOpen(false)}
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
