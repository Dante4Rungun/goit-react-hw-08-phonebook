import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { Welcome } from "pages/Welcome";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/auth-operations";
import { Phonebook } from "./Phonebook/Phonebook";

export const App = () => {
  const dispatch = useDispatch()
  //const isRefreshing = 

  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])

  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Phonebook />}>
        <Route index element={<Welcome/>} />
        <Route path="/goit-react-hw-08-phonebook/register" element={<Register/>} />
        <Route path="/goit-react-hw-08-phonebook/login" element={<Login/>} />
        <Route path="/goit-react-hw-08-phonebook/contacts"/>
      </Route>
    </Routes>
  );
};