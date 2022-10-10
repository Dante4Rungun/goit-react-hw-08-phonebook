import React from "react";
import styled from "./AuthNav.module.css"
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return (
        <div className={styled.auth}>
            <NavLink className={styled.auth__nav} to="/goit-react-hw-08-phonebook">Home</NavLink>
            <NavLink className={styled.auth__nav} to="/goit-react-hw-08-phonebook/login">Login</NavLink>
            <NavLink className={styled.auth__nav} to="/goit-react-hw-08-phonebook/register">Registration</NavLink>
        </div>
    )
}