import { styled } from "styled-components";

export const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  width: fit-content;
  white-space: nowrap;
  padding: 0.8rem 1.8rem;
  font-size: 1.6rem;
  background-color: #ff0000;
  color: #fff;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 200ms ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    outline: 2px #fff solid;
  }
  margin: 1.5rem;
`;
