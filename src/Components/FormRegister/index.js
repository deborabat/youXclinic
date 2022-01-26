import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible, AiOutlineLock } from "react-icons/ai";

import * as S from "./styles";

const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [date, setDate] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [UF, setUF] = useState("");
  const [errors, setErrors] = useState({});
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // onsubmit
  const handleSubmit = () => {
    navigate("/Home");
  };

  const togglePassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <S.Container>
      <form method="POST" onSubmit={handleSubmit} autoComplete={"off"}>
        <S.Form>
          <S.Input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Nome completo"
            onChange={(e) => setName(e.target.value)}
          />
          {/* {errors && <S.TextError>erro</S.TextError>} */}
          <S.Input
            type="CPF"
            id="CPF"
            name="CPF"
            value={CPF}
            placeholder="CPF"
            onChange={(e) => setCPF(e.target.value)}
          />
          {/* {errors && <S.TextError>erro</S.TextError>} */}
          <S.Input
            type="Date"
            id="Date"
            name="Date"
            value={date}
            placeholder="Data de nascimento"
            onChange={(e) => setDate(e.target.value)}
          />
          {/* {errors && <S.TextError>erro</S.TextError>} */}
          <S.Input
            type="number"
            name="peso"
            id="peso"
            value={peso}
            placeholder="Peso em kg"
            onChange={(e) => setPeso(e.target.value)}
          />
          {/* {errors && <S.TextError>erro</S.TextError>} */}
          <S.Input
            type="number"
            id="altura"
            name="altura"
            value={altura}
            placeholder="Altura em metros"
            onChange={(e) => setAltura(e.target.value)}
          />
          {/* {errors && <S.TextError>erro</S.TextError>} */}
          <S.Input
            type="select"
            name="uf"
            id="uf"
            value={UF}
            placeholder="UF"
            onChange={(e) => setUF(e.target.value)}
          />
          {/* {errors && <S.TextError>erro</S.TextError>} */}
          <S.Input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {errors && <S.TextError>erro</S.TextError>} */}
          <S.Input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {errors && <S.TextError>erro</S.TextError>} */}
          <S.Button type="submit">Login</S.Button>
        </S.Form>
      </form>
    </S.Container>
  );
};
export default FormRegister;
