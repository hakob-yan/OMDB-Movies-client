import React from "react";
import * as S from "./styles";
import Spinner from "../../assets/images/spinner.svg"


function Loader() {
  return (
    <S.SpinnerWrapper>
      <S.Spinner src={Spinner} />
    </S.SpinnerWrapper>
  );
}

export default Loader;
