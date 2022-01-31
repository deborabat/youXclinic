// todo: diminuir tamanho do arquivo
import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import InputMask from "react-input-mask";
import { registerApi } from "../../services/users";

import * as S from "./styles";
import { SignupValidationSchema } from "../../validations";
import { useRegisterForm } from "./hooks";
import coordinatesUf from "../../services/coordinates";

const FormRegister = () => {
  const navigate = useNavigate();

  const { formValue, handleChange } = useRegisterForm();

  const { name, cpf, type, date, email, password, uf, height, weight } =
    formValue;

  const handleSubmitRegister = async () => {
    try {
      const coord = await coordinatesUf(uf);

      await registerApi({ ...formValue, coord });
      navigate("/Home");
    } catch (error) {
      alert("Erro ao cadastrar");
    }
  };

  return (
    <S.Container>
      <Formik
        initialValues={{ email: "", senha: "" }}
        validationSchema={SignupValidationSchema}
        onSubmit={handleSubmitRegister}
      >
        {({ errors }) => (
          <form onSubmit={handleSubmitRegister}>
            <S.Form>
              <S.Input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                aria-label="name"
                aria-required="true"
                placeholder="nome completo"
                value={name}
                onChange={handleChange}
              />

              <S.Input
                type="numeric"
                id="cpf"
                name="cpf"
                autoComplete="cpf"
                pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                aria-required="true"
                placeholder="cpf"
                value={cpf}
                onChange={handleChange}
              />
              {errors.cpf && <S.TextError>{errors.cpf}</S.TextError>}
              <select value={type} placeholder="tipo" onChange={handleChange}>
                <option value="">Selecione</option>
                <option value="Paciente">Paciente</option>
                <option value="Enfermeiro">Enfermeiro</option>
              </select>
              <S.Input
                type="date"
                id="date"
                name="date"
                aria-label="date"
                placeholder="data de nasc"
                value={date}
                onChange={handleChange}
              />
              <S.Input
                type="numeric"
                id="weight"
                name="weight"
                aria-label="peso"
                placeholder="peso em kg"
                value={weight}
                onChange={handleChange}
              />
              <S.Input
                type="numeric"
                id="height"
                name="height"
                aria-label="peso"
                value={height}
                placeholder="Altura em metros"
                onChange={handleChange}
              />
              {/* to do refatorar selects */}
              <select value={uf} placeholder="UF" onChange={handleChange}>
                <option value="">Selecione</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
              {errors.uf && <S.TextError>{errors.uf}</S.TextError>}
              <S.Input
                type="email"
                id="email"
                name="email"
                aria-label="email"
                aria-required="true"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
              {errors.email && <S.TextError>{errors.email}</S.TextError>}
              <S.Input
                type="password"
                id="senha"
                name="password"
                aria-label="senha"
                aria-required="true"
                placeholder="senha"
                value={password}
                onChange={handleChange}
              />
              {errors.password && <S.TextError>{errors.password}</S.TextError>}
              <S.Button type="submit">Login</S.Button>
            </S.Form>
          </form>
        )}
      </Formik>
    </S.Container>
  );
};
export default FormRegister;
