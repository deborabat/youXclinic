import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible, AiOutlineLock } from "react-icons/ai";

import * as S from "./styles";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <S.Icon>
            <AiOutlineLock size="50px" color="#900c3f" />
          </S.Icon>
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
export default FormLogin;
