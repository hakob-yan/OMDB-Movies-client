import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { getMovieById } from "../../api";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { IMovie } from "./types";
import Button from "../../components/Button";
import Modal from "../../components/DeleteModal";

function Movie() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState<null | IMovie>(null);
  useEffect(() => {
    (async function () {
      const movieResponse = await getMovieById(movieId || "");
      if (movieResponse) {
        setMovie(movieResponse);
      }
    })();
  }, [movieId]);
  const handleAddFavorite = () => {};
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
              <Button value="Add to favorites" onClick={handleAddFavorite} />
              <Button value="Edit" onClick={handleAddFavorite} />
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
