import { styled } from "styled-components";

export const MovieWrapper = styled.section<{ image: string }>`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  filter:blur(0.3rem);
  opacity: 0.6;
  width: 100%;
  height: 100%;
`;

export const MovieContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 30rem;
  position: relative;
  background-color: rgba(0, 0, 0, 1);

`;

