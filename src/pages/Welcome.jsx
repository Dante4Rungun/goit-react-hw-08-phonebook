import React from "react";
import styled from "./Welcome.module.css"

export const Welcome = () => {
    return (
        <div className={styled.welcome}>
            <p className={styled.welcome__title}>Welcome to Phonebook</p>
        </div>
    )
}