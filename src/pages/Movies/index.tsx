import React, { ReactElement, useEffect, useState } from "react";
import {
  IMovie,
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
import { SEARCH } from "../../constants";

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

  const [searchValue, setSeacrhValue] = useState(
    localStorage.getItem(SEARCH) || ""
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeacrhValue(e.target.value);
    localStorage.setItem(SEARCH, e.target.value);
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
          <S.WrapperHeaderTitle>
            {!searchValue?.length
              ? "Top movies"
              : searchedMovies?.length
              ? "Found movies"
              : "No movies found"}
          </S.WrapperHeaderTitle>
          <S.Movies>
            {isLoading ? (
              <Loader />
            ) : (
              (searchValue?.length ? searchedMovies : recentMovies)?.map(
                (movie: IMovie) => (
                  <MovieCard
                    key={movie.imdbID}
                    title={movie.title}
                    image={movie.image}
                    imdbID={movie.imdbID}
                    year={movie.year}
                    type={movie.type}
                  />
                )
              )
            )}
          </S.Movies>
        </S.WrapperBody>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
