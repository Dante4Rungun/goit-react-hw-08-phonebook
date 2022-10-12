import React from "react";
import styled from "./UserMenu.module.css"
import { useDispatch } from 'react-redux';
import { logOut } from "redux/auth/auth-operations";
import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const UserMenu = () => {
    const dispatch = useDispatch()
    const {user} = useAuth()
    const handleLogOut = () => dispatch(logOut())

    return (
        <div className={styled.userMenu}>
            <NavLink className={styled.userMenu__btn} to="/goit-react-hw-08-phonebook/contacts">Contacts</NavLink>
            <p className={styled.userMenu__welcome}>Welcome {user.name}!</p>
            <button className={styled.userMenu__btn} onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

//<p className={styled.userMenu__welcome}>Welcome {user.name}!</p>