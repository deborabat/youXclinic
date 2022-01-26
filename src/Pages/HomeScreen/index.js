import React, { useState } from "react";
import Map from "../../Components/Map";
import Menu from "../../Components/Menu";

import * as S from "./styles";

const HomeScreen = () => {
  return (
    <S.Wapper>
      <Menu />
      <S.MapContainer>
        <Map />
      </S.MapContainer>
    </S.Wapper>
  );
};
export default HomeScreen;
