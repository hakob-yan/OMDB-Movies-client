import { createPortal } from "react-dom";
import * as S from "./styles";

function Modal({
  isOpen,
  close,
  confirm,
  data,
}: {
  isOpen: boolean;
  close: () => void;
  confirm: () => void;
  data: {
    title: string;
    year: string;
    genre: string;
    runtime: string;
    director: string;
  };
}) {
  const portal = document.getElementById("portals") as HTMLDivElement;
  console.log();
  
  if (isOpen) {
    return createPortal(
      <S.ModalWrapper>
        <S.ModalContenet>data.title</S.ModalContenet>
      </S.ModalWrapper>,
      portal
    );
  } else {
    return null;
  }
}

export default Modal;
