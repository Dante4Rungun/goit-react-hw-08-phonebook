import React from "react";
import styled from "./Header.module.css"
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks/useAuth";
//import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";

export const Header = () => {
    const { isLoggedIn } = useAuth()
    return (
        <header className={styled.header}>
            <AuthNav/>
        </header>
    )
}
//{isLoggedIn ? <UserMenu/> : <AuthNav/>}
//
