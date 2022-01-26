import React, { useState } from "react";
import Menu from "../../Components/Menu";
import FormRegister from "../../Components/FormRegister";

import * as S from "./styles";

const RegisterScreen = () => {
  return (
    <S.Wapper>
      <Menu />
      <FormRegister />
    </S.Wapper>
  );
};
export default RegisterScreen;
