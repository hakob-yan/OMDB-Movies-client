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
  searchedMoviesSelect,
} from "../../redux/features/movies/selectors";
import MovieCard from "../../components/MovieCard";
import Loader from "../../components/Loader";
import { useDebouncedCallback } from "use-debounce";
import { SEARCH } from "../../constants";
import { usersSelect } from "../../redux/features/users/selectors";

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
  const searchedMovies = useSelector(searchedMoviesSelect);

  const [searchValue, setSeacrhValue] = useState(
    localStorage.getItem(SEARCH) || ""
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    localStorage.setItem(SEARCH, inputValue);
    setSeacrhValue(inputValue);
    inputValue.length > 1 && debounced(inputValue);
  };
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      if (searchValue.length > 1) {
        debounced(searchValue);
      } else {
        await dispatch(fetchAllMovies()).unwrap();
      }
      setIsLoading(false);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.activeUserId]);

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
              : `${searchedMovies.length} movies found`}
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
              )?.map((movie: IMovie) => (
                <MovieCard
                  isFavorite={movie.isFavorite}
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
