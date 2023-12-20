import React, { ReactElement, useEffect, useState } from "react";
import {
  IMovie,
  fetchAllMovies,
  searchMoviesByTitle,
} from "../../redux/features/movies/moviesSlice";

import * as S from "./styled";
import Search from "../../components/Search";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {
  allMoviesSelect,
  onlyFavoritesSelect,
  searchedMoviesSelect,
} from "../../redux/features/movies/selectors";
import MovieCard from "../../components/MovieCard";
import Loader from "../../components/Loader";
import { useDebouncedCallback } from "use-debounce";
import { SEARCH } from "../../constants";
import { usersSelect } from "../../redux/features/users/selectors";
import { formatTitle } from "../../utils";

const Home = (): ReactElement => {
  const dispatch = useAppDispatch();
  const user = useSelector(usersSelect);
  const [isLoading, setIsLoading] = useState(false);
  const debounced = useDebouncedCallback(async (value) => {
    setIsLoading(true);
    await dispatch(searchMoviesByTitle(value)).unwrap();
    setIsLoading(false);
  }, 700);
  const allMovies = useSelector(allMoviesSelect);
  const onlyFavorites = useSelector(onlyFavoritesSelect);
  const searchedMovies = useSelector(searchedMoviesSelect);
  const [searchValue, setSeacrhValue] = useState(
    localStorage.getItem(SEARCH) || ""
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSeacrhValue(inputValue);
  };
  useEffect(() => {
    searchValue.length && debounced(searchValue);
    localStorage.setItem(SEARCH, searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      if (searchValue.length) {
        debounced(searchValue);
      } else {
        await dispatch(fetchAllMovies()).unwrap();
      }
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Number(user.activeUserId)]);

  return (
    <S.Container>
      <S.Image />
      <S.Wrapper>
        <S.WrapperHeader />
        <S.WrapperBody>
          <Search value={searchValue} onChange={handleChange} />
          <S.WrapperHeaderTitle>
            {isLoading
              ? ""
              : !searchValue?.length
              ? "User Movies "
              : `${searchedMovies.length} global movies found(not user's but can delete)`}
          </S.WrapperHeaderTitle>
          <S.Movies>
            {isLoading ? (
              <Loader />
            ) : (
              (!searchedMovies.length
                ? searchValue.length
                  ? []
                  : allMovies
                : searchedMovies
              )
                ?.filter((movie) => movie.is_favorite === onlyFavorites)
                .map((movie: IMovie) => (
                  <MovieCard
                    isFavorite={movie.is_favorite}
                    key={movie.imdb_id}
                    title={formatTitle(movie.title)}
                    year={movie.year}
                    runtime={movie.runtime}
                    genre={movie.genre}
                    director={movie.director}
                    image={movie.image}
                    imdbID={movie.imdb_id}
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
