import { useState } from "react";

export const useRegisterForm = () => {
  // state form data
  const [formValue, setFormValue] = useState({
    name: "",
    type: "",
    cpf: "",
    date: "",
    email: "",
    password: "",
    uf: "",
    height: "",
    weight: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return {
    handleChange,
    formValue,
  };
};
