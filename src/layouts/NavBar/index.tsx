import React, { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
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
import { addUser } from "../../api";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  const users = useSelector(usersSelect);
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
  const options = users.list.map((el) => ({
    value: `${el.id}`,
    label: el.name,
  }));
  const handleAddUserCinfirm = async () => {
    dispatch(addNewUser(newUserName));
    setIsAddUserModalOpen(false);
  };
  return (
    <S.NavBar>
      <S.LiveMovies onClick={handleClick}>
        <S.LiveMoviesLogo src={Logo} />
        <S.LiveMoviesTitle>liveMovies</S.LiveMoviesTitle>
        <Button
          variant={2}
          onClick={handeAddUserClick}
          value="+ Add User"
          fontSize="14px"
        />

        <Dropdown
          className="drop-down-users"
          menuClassName="drop-down-users-menu"
          options={options}
          onChange={handleDropDownChange}
          value={options[0]?.value}
          placeholder="Select an option"
        />
        <AddUserModal
          isOpen={isAddUserModalOpen}
          close={() => setIsAddUserModalOpen(false)}
          confirm={handleAddUserCinfirm}
          onChange={setNewUserName}
          value={newUserName}
        />
      </S.LiveMovies>
      <S.MoviesTitle onClick={handleMoviesClick}>Movies</S.MoviesTitle>
    </S.NavBar>
  );
}

export default NavBar;
