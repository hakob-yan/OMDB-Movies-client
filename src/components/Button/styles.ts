import { styled } from "styled-components";

export const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  width: fit-content;
  white-space: nowrap;
  padding: 2% 5%;
  font-size: 1.6rem;
  background-color: #ff0000;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 200ms ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    outline: 2px #fff solid;
  }
  margin: 1.5rem;
`;
export const ButtonWrapperVar2 = styled.button`
  outline: none;
  border: none;
  width: fit-content;
  white-space: nowrap;
  padding: 2% 5%;
  font-size: 1.6rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 10px;
  border: 2px solid #fff;
  cursor: pointer;
  transition: background-color 200ms ease;
  &:hover {
    background-color: #ff0000;
    outline: 2px #fff solid;
  }
`;
