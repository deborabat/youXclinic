import { api } from "./api";

export async function loginApi({ email, password }) {
  return await api.request({
    method: "post",
    url: "auth/login",
    data: {
      email,
      password,
    },
  });
}
