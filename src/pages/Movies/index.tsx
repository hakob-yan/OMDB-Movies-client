import React, { ReactElement, useEffect, useState } from "react";
import { fetchRecentMovies } from "../../redux/features/movies/moviesSlice";

import * as S from "./styled";
import Search from "../../components/Search";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { recentMoviesSelect } from "../../redux/features/movies/selectors";
import MovieCard from "../../components/MovieCard";

// <button onClick={() => dispatch(increment())}>Increment</button>
// <button onClick={() => dispatch(decrement())}>Decrement</button>
const Home = (): ReactElement => {
  const dispatch = useAppDispatch();
  const recentMovies = useSelector(recentMoviesSelect);
  const [searchValue, setSeacrhValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeacrhValue(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchRecentMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperHeader />
        <S.WrapperBody>
          <Search value={searchValue} onChange={handleChange} />
          <S.Movies>
            {!recentMovies.length
              ? 4
              : recentMovies.map((movie) => (
                  <MovieCard
                    key={movie.imdbID}
                    title={movie.title}
                    image={movie.image}
                    imdbID={movie.imdbID}
                    year={movie.year}
                    type={movie.type}
                  />
                ))}
          </S.Movies>
        </S.WrapperBody>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
