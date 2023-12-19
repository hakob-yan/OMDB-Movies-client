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
  width: 50rem;
  /* height: 30rem; */
  background-color: #1b263b;
  border-radius: 2rem;
`;

export const ModalTitle = styled.p`
  text-align: center;
  padding: 5rem;
  color: #fff;
  font-size: 1.7rem;
`;
export const ModalBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
