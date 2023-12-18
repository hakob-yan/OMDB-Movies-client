import React from "react";
import { createPortal } from "react-dom";
import * as S from "./styles";

function Modal({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  const portal = document.getElementById("portals") as HTMLDivElement;
  return createPortal(<S.ModalWrapper>
    
  </S.ModalWrapper>, portal);
}

export default Modal;
