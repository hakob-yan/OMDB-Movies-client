import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { getMovieById } from "../../api";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { IMovie } from "./types";

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
  return (
    <S.MovieContainer>
      {!movie ? (
        <Loader />
      ) : (
        <S.MovieWrapper image={movie ? movie.image : ""}>
          <S.AboutSection>1</S.AboutSection>
          <S.CardSection>
            <S.Card image={movie.image} />
          </S.CardSection>
        </S.MovieWrapper>
      )}
    </S.MovieContainer>
  );
}

export default Movie;
