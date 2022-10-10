import React from "react";
import styled from "./Register.module.css"
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";

export const Register = () => {
    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        dispatch(register({
            name: `${form.elements.username.value}`,
            email: `${form.elements.email.value}`,
            password: `${form.elements.pass.value}`,
        }))
        form.reset()
    }

    return (
        <form className={styled.register} onSubmit={handleSubmit}>
            <p className={styled.register__title}>Sign Up</p>
            <input className={styled.register__input} name="username" type="text" placeholder="your name"/>
            <input className={styled.register__input} name="email" type="text" placeholder="email"/>
            <input className={styled.register__input} name="pass" type="password" placeholder="password"/>
            <button type="submit" className={styled.register__submit}>Sign Up</button>
        </form>
    )
}