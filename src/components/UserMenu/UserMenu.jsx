import React from "react";
import styled from "./UserMenu.module.css"
import { useDispatch } from 'react-redux';
import { logOut } from "redux/auth/auth-operations";

export const UserMenu = () => {
    const dispatch = useDispatch()
    return (
        <div className={styled.userMenu}>
            <button className={styled.userMenu__btn} onClick={() => dispatch(logOut())}>Log Out</button>
        </div>
    )
}
