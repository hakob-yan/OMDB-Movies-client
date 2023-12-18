import { styled } from "styled-components";

export const MoviesCardImage = styled.img`
  width: 100%;
  border-radius: 1.5rem;
  overflow: hidden;
  height: 25rem;
  min-height: 25rem;
  max-height: 35rem;
  transition: all 100ms ease-in;
  &:hover {
    background-color: black;
    padding: 0rem;

    filter: opacity(0.2);
  }
`;
export const MoviesCardTitle = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const MoviesCardWrapper = styled.div`
  position: relative;
  margin: 3.5rem;
  cursor: pointer;
  color: white;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
`;
export const AddFavorite = styled.img`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 999;
  transition: all 100ms ease-in;
  &:hover {
    transform: scale(1.5);
  }
`;
export const Actions = styled.div`
  /* position: absolute; */
  width: 100%;
  bottom: 2.3rem;
  display: flex;
  justify-content: space-around;
  z-index: 999;
`;
