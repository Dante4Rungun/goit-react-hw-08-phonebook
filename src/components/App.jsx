import { useAuth } from "hooks/useAuth";
import { Contacts } from "pages/Contacts";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { Welcome } from "pages/Welcome";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/auth-operations";
import { Phonebook } from "./Phonebook/Phonebook";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

export const App = () => {
  const dispatch = useDispatch()
  const { isRefreshing } = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])

  return isRefreshing ? "refreshing user data..." : (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Phonebook />}>
        <Route index element={<Welcome/>} />
        <Route path="/goit-react-hw-08-phonebook/register" element={
          <RestrictedRoute element={Register} redirectTo="/goit-react-hw-08-phonebook/contacts" />
        } />
        <Route path="/goit-react-hw-08-phonebook/login" element={
          <RestrictedRoute element={Login} redirectTo="/goit-react-hw-08-phonebook/contacts" />
        } />
        <Route path="/goit-react-hw-08-phonebook/contacts" element={
          <PrivateRoute element={Contacts} redirectTo="/goit-react-hw-08-phonebook/login"/>}
        />
      </Route>
    </Routes>
  );
};

//<Route path="/goit-react-hw-08-phonebook/register" element={<Register/>} />