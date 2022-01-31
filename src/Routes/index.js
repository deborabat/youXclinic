import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/HomeScreen";

import Login from "../Pages/LoginScreen";
import Register from "../Pages/RegisterScreen";

const RoutesScreen = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};
export default RoutesScreen;
