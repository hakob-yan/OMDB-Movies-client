import React from "react";
import * as S from "./styles";
import { IButton } from "./types";

function Button({
  value,
  onClick,
  variant = 1,
  width = "fit-content",
  height = "",
  fontSize = "1.5rem",
}: IButton) {
  if (variant === 1) {
    return (
      <S.ButtonWrapper onClick={onClick} style={{ width, height, fontSize }}>
        {value}
      </S.ButtonWrapper>
    );
  } else {
    return (
      <S.ButtonWrapperVar2
        onClick={onClick}
        style={{ width, height, fontSize }}
      >
        {value}
      </S.ButtonWrapperVar2>
    );
  }
}

export default Button;
