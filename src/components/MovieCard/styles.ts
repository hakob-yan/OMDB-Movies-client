import { styled } from "styled-components";

export const MoviesCardImage = styled.div<{
  backgroundImage: string;
}>`
  border-radius: 1.5rem;
  padding: 1rem;
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  height: 100%;
  min-height: 25rem;
  max-height: 35rem;
`;
export const MoviesCardTitle = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const MoviesCardWrapper = styled.div`
  width: 20rem;
  margin: 3.5rem;
  color: white;
  font-size: 1.3rem;
`;
