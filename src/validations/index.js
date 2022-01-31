import * as Yup from "yup";

export const LoginValidationScheme = Yup.object().shape({
  email: Yup.string().email("Email invalido"),
  pasword: Yup.string().required("Obrigatório"),
});

export const SignupValidationSchema = Yup.object().shape({
  name: Yup.string().required("Obrigatorio"),
  cpf: Yup.number().required("Obrigatorio").min(14).max(14),
  uf: Yup.string().required("Campo obrigatorio"),
  email: Yup.string().email("Email invalido"),
  pasword: Yup.string().required("Obrigatório"),
});
