import React from "react";
import * as S from "./styles";
import { IButton } from "./types";

function Button({ value, onClick }: IButton) {
  return <S.ButtonWrapper onClick={onClick}>{value}</S.ButtonWrapper>;
}

export default Button;
