import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import * as paths from "../../constants/routerPaths";
import Logo from "../../assets/images/logo.png";
import { SEARCH } from "../../constants";

function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem(SEARCH);
    navigate("/");
  };
  const handleMoviesClick = () => {
    navigate(paths.HOME);
  };
  return (
    <S.NavBar>
      <S.LiveMovies onClick={handleClick}>
        <S.LiveMoviesLogo src={Logo} />
        <S.LiveMoviesTitle>liveMovies</S.LiveMoviesTitle>
      </S.LiveMovies>
      <S.MoviesTitle onClick={handleMoviesClick}>Movies</S.MoviesTitle>
    </S.NavBar>
  );
}

export default NavBar;
