import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import * as paths from "../../constants/routerPaths"
import Logo from "../../assets/images/logo.png"

function NavBar() {
    return (
        <S.NavBar>
            <S.LiveMovies>

                <S.LiveMoviesLogo src={Logo} />
                <p>liveMovies</p>
            </S.LiveMovies>
            <Link to={paths.HOME}>Movies</Link>
        </S.NavBar>
    );
}

export default NavBar;
