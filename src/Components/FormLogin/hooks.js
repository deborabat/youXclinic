import { useState } from "react";

export const useLoginForm = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    senha: "",
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
    formValue,
    handleChange,
  };
};
