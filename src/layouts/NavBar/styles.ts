import { styled } from "styled-components";

export const NavBar = styled.nav`
  position: absolute;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  z-index: 999;
  color: white;
  font-size: 1.7rem;
`;
export const LiveMovies = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  gap: 1rem 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export const LiveMoviesLogo = styled.img`
  width: 2rem;
  height: 2rem;
`;
export const LiveMoviesTitle = styled.p``;
export const MoviesTitle = styled.p`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bolder;
  border-bottom: 5px red solid;
  transition: all 100ms ease-out;
  &:hover {
    border: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Favorite = styled.img`
  width: 2rem;
  height: 2rem;
`;
