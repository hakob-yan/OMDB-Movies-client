import { createPortal } from "react-dom";
import * as S from "./styles";
import Button from "../Button";

function Modal({
  isOpen,
  close,
  confirm,
}: {
  isOpen: boolean;
  close: () => void;
  confirm: () => void;
}) {
  const portal = document.getElementById("portals") as HTMLDivElement;

  if (isOpen) {
    return createPortal(
      <S.ModalWrapper>
        <S.ModalContenet>
          <S.ModalTitle>
            Are you sure you want to delete this movie?
          </S.ModalTitle>
          <S.ModalBody>
            <Button value="Ok" onClick={confirm} />
            <Button value="Cancel" onClick={close} />
          </S.ModalBody>
        </S.ModalContenet>
      </S.ModalWrapper>,
      portal
    );
  } else {
    return null;
  }
}

export default Modal;
