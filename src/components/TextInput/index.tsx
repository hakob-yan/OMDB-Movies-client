import React from "react";
import * as S from "./styles";
function TextInput({
  onChange,
  value,
  type = "rext",
  ...props
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
}) {
  return <S.Input type={type} onChange={onChange} value={value} {...props} />;
}

export default TextInput;
