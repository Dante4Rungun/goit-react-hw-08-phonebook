import React from "react";
import styled from "./Logo.module.css"

export const Logo = ({ title } ) => {
    return (
        <div className={styled.logo}>
            <p className={styled.logo__text}>{title}</p>
        </div>
    )
}