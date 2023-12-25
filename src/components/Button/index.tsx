import React from "react";
import * as S from "./styles";
import { IButton } from "./types";

function Button({
  value,
  isDisabled,
  onClick,
  variant = 1,
  width = "fit-content",
  height = "",
  fontSize = "1.5rem",
}: IButton) {
  const stylesObj = {
    width,
    height,
    fontSize,
    backgroundColor: isDisabled ? "gray" : "",
    cursor: isDisabled ? "not-allowed" : "",
  };
  if (variant === 1) {
    return (
      <S.ButtonWrapper
        onClick={onClick}
        style={stylesObj}
        disabled={isDisabled}
      >
        {value}
      </S.ButtonWrapper>
    );
  } else {
    return (
      <S.ButtonWrapperVar2
        disabled={isDisabled}
        onClick={onClick}
        style={stylesObj}
      >
        {value}
      </S.ButtonWrapperVar2>
    );
  }
}

export default Button;
