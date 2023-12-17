import { styled } from "styled-components";

export const Container = styled.section`
  /* position: relative; */
`;
export const Image = styled.div`
  position: absolute;
  background-image: url("/wallpaper.jpg");
  background-size: cover;
  height: 100vh;
  height: 100%;
  width: 100%;
  z-index: -999;
  position: fixed;
  background-position: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 9rem 1fr;
`;
export const WrapperHeader = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const WrapperBody = styled.div`
  width: 100%;
  background-color: rgba(7, 11, 21);
  min-height: calc(100vh - 7.5rem);
  padding: 2.5rem;
  gap: 3.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Movies = styled.div`
  height: 100%;
  min-height: 25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
