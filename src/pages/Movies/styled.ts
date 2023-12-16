import { styled } from "styled-components";

export const Container = styled.section`
  background-image: url("/wallpaper.jpg");
  background-size: cover;
  height: 100vh;
  background-position: center;
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 4fr;
`;
export const WrapperHeader = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const WrapperBody = styled.div`
  width: 100%;
  background-color: red;
  background-color: rgba(7, 11, 21);
  display: flex;
  justify-content: center;
  align-items: center;
`;
