import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { getMovieById } from "../../api";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { IMovie } from "./types";
import Button from "../../components/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { updateMovie } from "../../redux/features/movies/moviesSlice";
import { toast } from "react-toastify";

function Movie() {
  let { movieId } = useParams();
  const dispatch = useAppDispatch();
  const [movie, setMovie] = useState<null | IMovie>(null);
  const [isfavorite, setIsfavorite] = useState(false);

  useEffect(() => {
    (async function () {
      const movieResponse = await getMovieById(movieId || "");
      if (movieResponse) {
        setMovie(movieResponse);
        setIsfavorite(movieResponse.is_favorite);
      }
    })();
  }, [movieId]);
  const handleToggleFavorite = () => {
    dispatch(
      updateMovie({
        id: movieId as string,
        data: {
          is_favorite: !movie?.is_favorite,
        },
      })
    );
    setIsfavorite(!isfavorite);
    toast("Toggled Favorites");
  };

  return (
    <S.MovieContainer>
      {!movie ? (
        <Loader />
      ) : (
        <S.MovieWrapper image={movie ? movie.image : ""}>
          <S.AboutSection>
            <S.Title>{movie.title}</S.Title>
            <S.SubTitle>Year: {movie.year}</S.SubTitle>
            <S.SubTitle>Runtime: {movie.runtime}</S.SubTitle>
            <S.SubTitle>Genre: {movie.genre}</S.SubTitle>
            <S.SubTitle>Diretor: {movie.director}</S.SubTitle>
            <S.ButtonsSection>
              <Button
                value={`${
                  !isfavorite ? "Add to Favorite" : "Remove from favorites"
                } `}
                onClick={handleToggleFavorite}
              />
              <Button value="Edit" onClick={handleToggleFavorite} />
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
