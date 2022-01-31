import React, { useState, useEffect } from "react";
import Map from "../../Components/Map";
import Menu from "../../Components/Menu";
import { GetUsers } from "../../services/users";

import * as S from "./styles";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  const GetUf = async () => {
    try {
      const response = await GetUsers();
      return setUsers(response.data);
    } catch (error) {
      alert("Errou ao carregar localizacoes");
    }
  };

  useEffect(() => {
    GetUf();
  }, []);

  return (
    <S.Wapper>
      <Menu />
      <S.MapContainer>
        <Map users={users} />
      </S.MapContainer>
    </S.Wapper>
  );
};
export default HomeScreen;
