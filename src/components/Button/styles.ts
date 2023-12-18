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
    background-color: rgba(0, 0, 0, 0);
    outline: 2px #fff solid;
  }
  margin: 1.5rem;
`;
