import React from "react";
import styled from "./Phonebook.module.css"
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Logo } from "components/Logo/Logo";

export const Phonebook = () => {

    return (
        <div className={styled.phonebook}>
            <Logo title="Phonebook" />
            <Header />
            <Suspense>
                <Outlet/>
            </Suspense>
        </div>
    )
}

//<h1 className={styled.phonebook__title}>Phonebook</h1 >
