import { styled } from "styled-components";

export const MoviesCardImage = styled.div<{
  backgroundImage: string;
}>`
  border-radius: 1.5rem;
  padding: 1rem;
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  height: 100%;
`;
export const MoviesCardTitle = styled.p`
  text-align: center;
`;

export const MoviesCardWrapper = styled.div`
  width: 20rem;
  height: 100%;
  margin: 3.5rem;
  color: black;
  font-size: 1.3rem;
`;
