import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { getMovieById } from "../../api";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { IMovie } from "./types";
import Button from "../../components/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { updateMovie } from "../../redux/features/movies/moviesSlice";
import MovieModal from "../../components/MovieModal";
import { toast } from "react-toastify";
import { formatTitle } from "../../utils";

function Movie() {
  let { movieId } = useParams();
  const dispatch = useAppDispatch();
  const [movie, setMovie] = useState<null | IMovie>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const movieResponse = await getMovieById(movieId || "");
      if (movieResponse) {
        setMovie(movieResponse);
      }
    })();
  }, [movieId]);
  const handleToggleFavorite = async () => {
    const data = await dispatch(
      updateMovie({
        id: movieId as string,
        data: {
          is_favorite: !movie?.is_favorite,
        },
      })
    );
    setMovie(data.payload);
    toast("Toggled Favorites");
  };
  const onSuccess = (result: IMovie) => setMovie(result);
  return (
    <S.MovieContainer>
      {!movie ? (
        <Loader />
      ) : (
        <S.MovieWrapper image={movie ? movie.image : ""}>
          <MovieModal
            data={{
              title: formatTitle(movie.title),
              year: movie.year,
              runtime: movie.runtime,
              director: movie.director,
              genre: movie.genre,
              movieId: movieId as string,
            }}
            isOpen={isEditModalOpen}
            onSuccess={onSuccess}
            close={() => setIsEditModalOpen(false)}
          />
          <S.AboutSection>
            <S.Title>{formatTitle(movie.title)}</S.Title>
            <S.SubTitle>Year: {movie.year}</S.SubTitle>
            <S.SubTitle>Runtime: {movie.runtime}</S.SubTitle>
            <S.SubTitle>Genre: {movie.genre}</S.SubTitle>
            <S.SubTitle>Diretor: {movie.director}</S.SubTitle>
            <S.ButtonsSection>
              <Button
                value={`${
                  !movie.is_favorite
                    ? "Add to Favorite"
                    : "Remove from favorites"
                } `}
                onClick={handleToggleFavorite}
              />
              <Button value="Edit" onClick={() => setIsEditModalOpen(true)} />
            </S.ButtonsSection>
          </S.AboutSection>
          <S.CardSection>
            <S.Card image={movie.image} />
          </S.CardSection>
        </S.MovieWrapper>
      )}
    </S.MovieContainer>
  );
}

export default Movie;
