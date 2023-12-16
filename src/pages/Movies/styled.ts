import { styled } from "styled-components";

export const Container = styled.section`
  background-image: url("/wallpaper.jpg");
  background-size: cover;
  min-height: 100vh;
  background-position: center;
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr;
`;
export const WrapperHeader = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const WrapperBody = styled.div`
  width: 100%;
  padding: 5rem;
  gap: 5rem 0;
  background-color: red;
  background-color: rgba(7, 11, 21);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Movies = styled.div`
  height: 100%;
  min-height: 25rem;
  max-height: 35rem;
  width: 100%;
  display: flex;
  gap: 0 5rem;
  flex-wrap: wrap;
`;
