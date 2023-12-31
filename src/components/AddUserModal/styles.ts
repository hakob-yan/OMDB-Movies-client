import { styled } from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContenet = styled.div`
  width: fit-content;
  min-width: 5rem;
  /* height: 30rem; */
  background-color: #1b263b;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Input = styled.input`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 8px;
  margin: 1rem;
`;
