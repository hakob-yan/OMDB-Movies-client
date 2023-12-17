import React, { ReactElement, useEffect, useState } from "react";
import {
  fetchRecentMovies,
  searchMoviesByTitle,
} from "../../redux/features/movies/moviesSlice";

import * as S from "./styled";
import Search from "../../components/Search";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {
  recentMoviesSelect,
  searchedMoviesSelect,
} from "../../redux/features/movies/selectors";
import MovieCard from "../../components/MovieCard";
import Loader from "../../components/Loader";
import { useDebouncedCallback } from "use-debounce";

const Home = (): ReactElement => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const debounced = useDebouncedCallback((value) => {
    setIsLoading(true);
    dispatch(searchMoviesByTitle(value)).unwrap();
    setIsLoading(false);
  }, 700);
  const recentMovies = useSelector(recentMoviesSelect);
  const searchedMovies = useSelector(searchedMoviesSelect);

  const [searchValue, setSeacrhValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeacrhValue(e.target.value);
    debounced(e.target.value);
  };
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchRecentMovies()).unwrap();
    setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.Image />
      <S.Wrapper>
        <S.WrapperHeader />
        <S.WrapperBody>
          <Search value={searchValue} onChange={handleChange} />
          <S.Movies>
            {isLoading ? (
              <Loader />
            ) : (
              searchedMovies.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  title={movie.title}
                  image={movie.image}
                  imdbID={movie.imdbID}
                  year={movie.year}
                  type={movie.type}
                />
              ))
            )}
          </S.Movies>
        </S.WrapperBody>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
