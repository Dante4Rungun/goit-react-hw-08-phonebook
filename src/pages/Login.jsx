import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth-operations";
import styled from "./Login.module.css"

export const Login = () => {
    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.pass.value,
        }))
        form.reset()
    }

    return (
        <form className={styled.login} onSubmit={handleSubmit}>
            <p className={styled.login__title}>Log In</p>
            <input className={styled.login__item} type="text" name="email" placeholder="input your username"/>
            <input className={styled.login__item} type="password" name="pass" placeholder="input your password"/>
            <button type="submit" className={styled.login__submit}>Log In</button>
        </form>
    )
}