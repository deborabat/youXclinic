import { api, getAuthoriazationHeader } from "./api";

export async function registerApi({
  name,
  cpf,
  type,
  date,
  email,
  password,
  uf,
  height,
  weight,
  coord,
}) {
  await api.request({
    headers: {
      Authorization: getAuthoriazationHeader(),
    },
    method: "POST",
    url: "/users",
    data: {
      name,
      type,
      cpf,
      date,
      email,
      password,
      uf,
      coordinates: coord,
      height,
      weight,
    },
  });
}

export async function GetUsers() {
  const users = await api.request({
    method: "GET",
    url: "/users",
    headers: {
      Authorization: getAuthoriazationHeader(),
    },
  });
  return users;
}
