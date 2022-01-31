import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { AiOutlineLock } from "react-icons/ai";

import * as S from "./styles";
import { LoginValidationScheme } from "../../validations";
import { storageSetToken } from "../../storage";
import { loginApi } from "../../services/login";
import { useLoginForm } from "./hooks";

const FormLogin = () => {
  const navigate = useNavigate();

  const { formValue, handleChange: handleChangeFormData } = useLoginForm();

  const { email, password } = formValue;

  async function handleSubmitLogin() {
    try {
      const response = await loginApi({
        email,
        password,
      });
      const token = response.data?.access_token;
      if (!token) throw Error();

      storageSetToken(token);
      navigate("/Home");
    } catch (error) {
      return alert("Credenciais invalidas");
    }
  }

  return (
    <S.Container>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginValidationScheme}
        onSubmit={handleSubmitLogin}
      >
        {({ errors }) => (
          <Form onSubmit={handleSubmitLogin}>
            <S.Form>
              <S.Icon>
                <AiOutlineLock size="50px" color="#900c3f" />
              </S.Icon>
              <S.Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="email@example.com"
                value={email}
                onChange={handleChangeFormData}
              />
              {errors.email && <S.TextError>{errors.email}</S.TextError>}

              <S.Input
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                value={password}
                onChange={handleChangeFormData}
              />
              {errors.password && <S.TextError>{errors.senha}</S.TextError>}
              <S.Button type="submit">Login</S.Button>
            </S.Form>
          </Form>
        )}
      </Formik>
    </S.Container>
  );
};
export default FormLogin;
