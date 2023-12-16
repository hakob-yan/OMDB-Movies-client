import { styled } from "styled-components";

export const NavBar = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  z-index: 999;
  color: white;
  font-size: 1.7rem;
`;
export const LiveMovies = styled.div`
  display: flex;
  gap: 0 1rem;
  font-weight: bold;
  
`;

export const LiveMoviesLogo = styled.img`
  width: 2rem;
  height: 2rem;
`;
