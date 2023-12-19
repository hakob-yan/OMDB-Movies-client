import React from "react";
import * as S from "./styles";
function TextInput({
  onChange,
  value,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {
  return <S.Input onChange={onChange} value={value} />;
}

export default TextInput;
