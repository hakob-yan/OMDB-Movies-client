import { createPortal } from "react-dom";
import * as S from "./styles";
import Button from "../Button";
import TextInput from "../TextInput";

function Modal({
  isOpen,
  close,
  confirm,
  value,
  onChange,
}: {
  isOpen: boolean;
  close: () => void;
  confirm: () => void;
  value: string;
  onChange: (e: string) => void;
}) {
  const portal = document.getElementById("portals") as HTMLDivElement;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  if (isOpen) {
    return createPortal(
      <S.ModalWrapper>
        <S.ModalContenet>
          <TextInput onChange={handleChange} value={value} />
          <S.ModalBody>
            <Button value="Save" onClick={confirm} />
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
