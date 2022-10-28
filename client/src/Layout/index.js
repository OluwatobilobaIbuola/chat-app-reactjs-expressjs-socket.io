import React from "react";
import { Route, Routes } from "react-router-dom";
import { SetImage } from "../Components/SetImage";
import { Container } from "../Components/styles/Container.style";
import ThemeMode from "../Components/ThemeMode/theme.mode";
import { Chat } from "../pages/Chat";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Pages = () => {
  return (
    <Container h="100vh">
      <ThemeMode />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetImage />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </Container>
  );
};
