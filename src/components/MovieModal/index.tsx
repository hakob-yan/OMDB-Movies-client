import { createPortal } from "react-dom";
import * as S from "./styles";
import { useState } from "react";
import TextInput from "../TextInput";
import Button from "../Button";

function Modal({
  isOpen,
  close,
  confirm,
  data: { title, year, genre, runtime, director },
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
  const [movieData, setMovieData] = useState({
    title,
    year,
    genre,
    runtime,
    director,
  });
  const handleInputChange = (value: string, section: string) => {
    setMovieData({ ...movieData, [section]: value });
  };
  if (isOpen) {
    return createPortal(
      <S.ModalWrapper>
        <S.ModalContenet>
          <S.InputTitles>Title</S.InputTitles>
          <TextInput
            onChange={(e) => handleInputChange(e.target.value, "title")}
            value={movieData.title}
          />
          <S.InputTitles>Year</S.InputTitles>
          <TextInput
            onChange={(e) => handleInputChange(e.target.value, "year")}
            value={movieData.year}
          />
          <S.InputTitles>Runtime</S.InputTitles>
          <TextInput
            onChange={(e) => handleInputChange(e.target.value, "runtime")}
            value={movieData.runtime}
          />
          <S.InputTitles>Genre</S.InputTitles>
          <TextInput
            onChange={(e) => handleInputChange(e.target.value, "genre")}
            value={movieData.genre}
          />
          <S.InputTitles>Director</S.InputTitles>
          <TextInput
            onChange={(e) => handleInputChange(e.target.value, "director")}
            value={movieData.director}
          />
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
