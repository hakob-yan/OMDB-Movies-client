import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import * as paths from "../../constants/routerPaths";
import Logo from "../../assets/images/logo.png";
import { SEARCH } from "../../constants";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useSelector } from "react-redux";
import { usersSelect } from "../../redux/features/users/selectors";

function NavBar() {
  const navigate = useNavigate();
  const users = useSelector(usersSelect);
  const handleClick = () => {
    localStorage.removeItem(SEARCH);
    navigate("/");
  };
  const handleMoviesClick = () => {
    navigate(paths.HOME);
  };
  const handleDropDownChange = () => {};
  const options = users.list.map((el) => ({
    value: `${el.id}`,
    label: el.name,
  }));
  return (
    <S.NavBar>
      <S.LiveMovies onClick={handleClick}>
        <S.LiveMoviesLogo src={Logo} />
        <S.LiveMoviesTitle>liveMovies</S.LiveMoviesTitle>
        <Dropdown
          className="drop-down-users"
          menuClassName="drop-down-users-menu"
          options={options}
          onChange={handleDropDownChange}
          value={options[0]?.value}
          placeholder="Select an option"
        />
      </S.LiveMovies>
      <S.MoviesTitle onClick={handleMoviesClick}>Movies</S.MoviesTitle>
    </S.NavBar>
  );
}

export default NavBar;
