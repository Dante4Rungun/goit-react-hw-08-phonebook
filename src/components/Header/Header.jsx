import React from "react";
import styled from "./Header.module.css"
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks/useAuth";
import { UserMenu } from "components/UserMenu/UserMenu";
import { selectUser } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";

export const Header = () => {
    const { isLoggedIn } = useAuth()
    console.log(isLoggedIn)
    console.log(useSelector(selectUser))
    return (
        <header className={styled.header}>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}

//
