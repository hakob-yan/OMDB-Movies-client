import React, { useState } from "react";
import * as S from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import * as paths from "../../constants/routerPaths";
import Logo from "../../assets/images/logo.png";
import { SEARCH } from "../../constants";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { useSelector } from "react-redux";
import { usersSelect } from "../../redux/features/users/selectors";
import { addNewUser, setUser } from "../../redux/features/users/usersSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Button from "../../components/Button";
import AddUserModal from "../../components/AddUserModal";
import MovieModal from "../../components/MovieModal";
import starOn from "../../assets/images/favorite.svg";
import starOff from "../../assets/images/favorite-off.svg";

import { onlyFavoritesSelect } from "../../redux/features/movies/selectors";
import { setOnlyFavorites } from "../../redux/features/movies/moviesSlice";
import { toast } from "react-toastify";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false);

  const [newUserName, setNewUserName] = useState("");
  const users = useSelector(usersSelect);
  const onlyFavorites = useSelector(onlyFavoritesSelect);
  const handleClick = () => {
    localStorage.removeItem(SEARCH);
    navigate("/");
  };
  const handleMoviesClick = () => {
    navigate(paths.HOME);
  };
  const handleDropDownChange = (option: Option) => {
    dispatch(setUser(option.value));
  };
  const handeAddUserClick = () => setIsAddUserModalOpen(true);
  const handeAddMovieClick = () => setIsAddMovieModalOpen(true);
  const options = users.list.map((el) => ({
    value: `${el.id}`,
    label: el.name,
  }));
  const handleAddUserCinfirm = async () => {
    if (newUserName.length) {
      dispatch(addNewUser(newUserName));
      setIsAddUserModalOpen(false);
      toast('New User Added')
      setNewUserName("");
    }
  };
  const handleFavoriteClick = () => {
    dispatch(setOnlyFavorites(!onlyFavorites));
  };
  const { pathname } = useLocation();

  return (
    <S.NavBar>
      <S.LiveMovies onClick={handleClick}>
        <S.LiveMoviesLogo src={Logo} />
        <S.LiveMoviesTitle>liveMovies</S.LiveMoviesTitle>

        {!pathname.startsWith("/movie/") ? (
          <>
            <Button
              variant={2}
              onClick={handeAddUserClick}
              value="+ Add User"
              fontSize="14px"
            />
            <Button
              variant={2}
              onClick={handeAddMovieClick}
              value="+ Add Movie"
              fontSize="14px"
            />
            <Dropdown
              className="drop-down-users"
              menuClassName="drop-down-users-menu"
              options={options}
              onChange={handleDropDownChange}
              value={`${users.activeUserId}`}
              placeholder="Select an option"
            />
            <AddUserModal
              isOpen={isAddUserModalOpen}
              close={() => setIsAddUserModalOpen(false)}
              confirm={handleAddUserCinfirm}
              onChange={setNewUserName}
              value={newUserName}
            />
            <MovieModal
              isOpen={isAddMovieModalOpen}
              close={() => setIsAddMovieModalOpen(false)}
            />
            <S.Favorite
              src={onlyFavorites ? starOn : starOff}
              onClick={handleFavoriteClick}
            />
          </>
        ) : null}
      </S.LiveMovies>
      <S.MoviesTitle onClick={handleMoviesClick}>Movies</S.MoviesTitle>
    </S.NavBar>
  );
}

export default NavBar;
