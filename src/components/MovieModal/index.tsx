import { createPortal } from "react-dom";
import * as S from "./styles";
import Button from "../Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addMovie, updateMovie } from "../../redux/features/movies/moviesSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormData } from "./utils";
import { IMovie } from "../../pages/Movie/types";
import { toast } from "react-toastify";

function Modal({
  isOpen,
  close,
  data,
  onSuccess,
}: {
  isOpen: boolean;
  close: () => void;
  onSuccess?: (data: IMovie) => void;
  data?: IFormData;
}) {
  const portal = document.getElementById("portals") as HTMLDivElement;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ defaultValues: data });
  const dispatch = useAppDispatch();

  const submit: SubmitHandler<IFormData> = async (data) => {
    if (data.movieId) {
      const result = await dispatch(updateMovie({ id: data.movieId, data }));
      updateMovie({ id: data.movieId, data });
      onSuccess && onSuccess(result.payload);
    } else {
      await dispatch(addMovie(data));
    }
    toast("New Movie Added");
    close();
  };

  if (isOpen) {
    return createPortal(
      <S.ModalWrapper>
        <S.ModalContenet onSubmit={handleSubmit(submit)}>
          <S.InputTitles>Title</S.InputTitles>
          <S.Input
            {...register("title", {
              required: true,
              pattern: {
                value: /[A-Za-z]{3,}/,
                message: "Should be at least 3 characters long",
              },
            })}
          />
          <S.InputError>{errors?.title?.message}</S.InputError>
          <S.InputTitles>Year</S.InputTitles>
          <S.Input
            {...register("year", {
              required: true,
              pattern: {
                value: /^[12][0-9]{3}$/,
                message: "Should be a valid year(ex.2021)",
              },
            })}
          />
          <S.InputError>{errors?.year?.message}</S.InputError>
          <S.InputTitles>Runtime</S.InputTitles>
          <S.Input
            {...register("runtime", {
              required: true,
              pattern: {
                value: /[A-Za-z]{3,}/,
                message: "Should be at least 3 characters long",
              },
            })}
          />
          <S.InputError>{errors?.runtime?.message}</S.InputError>

          <S.InputTitles>Genre</S.InputTitles>
          <S.Input
            {...register("genre", {
              required: true,
              pattern: {
                value: /[A-Za-z]{3,}/,
                message: "Should be at least 3 characters long",
              },
            })}
          />
          <S.InputError>{errors?.genre?.message}</S.InputError>

          <S.InputTitles>Director</S.InputTitles>
          <S.Input
            {...register("director", {
              required: true,
              pattern: {
                value: /[A-Za-z]{3,}/,
                message: "Should be at least 3 characters long",
              },
            })}
          />
          <S.InputError>{errors?.director?.message}</S.InputError>

          <S.ModalBody>
            <Button value="Save" />
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
