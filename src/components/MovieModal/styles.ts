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
  min-width: 20rem;
  /* height: 30rem; */
  background-color: #1b263b;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem 0;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const InputTitles = styled.p`
  display: flex;
  width: 100%;
  justify-content: start;
  color: #fff;
  padding-left: 1rem;
`;