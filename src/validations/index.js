import * as Yup from "yup";

export const LoginValidationScheme = Yup.object().shape({
  email: Yup.string().email("Email invalido"),
  senha: Yup.string().required("Obrigatório"),
});

export const SignupValidationSchema = Yup.object().shape({
  nome: Yup.string().required("Obrigatorio"),
  cpf: Yup.number().required("Obrigatorio"),
  uf: Yup.string().required("Campo obrigatorio"),
});
