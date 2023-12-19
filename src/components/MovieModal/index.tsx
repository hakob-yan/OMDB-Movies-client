import { createPortal } from "react-dom";
import * as S from "./styles";
import { useState } from "react";
import TextInput from "../TextInput";
import Button from "../Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addMovie, updateMovie } from "../../redux/features/movies/moviesSlice";
import { IMovie } from "../../pages/Movie/types";
const initialdata = {
  title: "",
  year: "",
  genre: "",
  runtime: "",
  director: "",
};

function Modal({
  isOpen,
  close,
  data,
  onSuccess,
}: {
  isOpen: boolean;
  close: () => void;
  onSuccess?: (data: IMovie) => void;
  data?: {
    title: string;
    year: string;
    genre: string;
    runtime: string;
    director: string;
    movieId: string;
  };
}) {
  const portal = document.getElementById("portals") as HTMLDivElement;
  const dispatch = useAppDispatch();
  const [movieData, setMovieData] = useState({
    title: data?.title || initialdata.title,
    year: data?.year || initialdata.year,
    genre: data?.genre || initialdata.genre,
    runtime: data?.runtime || initialdata.runtime,
    director: data?.director || initialdata.director,
  });
  const handleInputChange = (value: string, section: string) => {
    setMovieData({ ...movieData, [section]: value });
  };
  const handleClick = async () => {
    if (data) {
      const result = await dispatch(
        updateMovie({ id: data.movieId, data: movieData })
      );
      onSuccess && onSuccess(result.payload);
    } else {
      const result = await dispatch(addMovie(movieData));
      setMovieData(initialdata);
      console.log(result);
    }

    close();
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
            <Button value="Save" onClick={handleClick} />
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
