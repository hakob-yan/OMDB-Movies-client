import { styled } from "styled-components";

export const MovieWrapper = styled.section<{ image: string }>`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-wrap: wrap; */
`;

export const MovieContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 30rem;
  position: relative;
`;
export const CardSection = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: start;
  align-items: center;
  padding-right: 5rem;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const AboutSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 5rem;
`;
export const Card = styled.div<{ image: string }>`
  background-image: ${(props) => `url(${props.image})`};
  width: 20rem;
  height: 30rem;
  border-radius: 1rem;
`;
export const Title = styled.p`
  font-size: 3rem;
  color: #fff;
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;
export const ButtonsSection = styled.div`
  margin: 5rem 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    justify-content: center;
    margin: 2rem 0;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  color: #7a7c79;
  font-weight: bold;
  margin: 0.5rem 0;
`;
