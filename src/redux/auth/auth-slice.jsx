import { createSlice } from "@reduxjs/toolkit";
import { logIn, register, logOut, refreshUser } from "./auth-operations";

const InitialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState: InitialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true    
        },
        [logIn.fulfilled](state, action) {
            console.log(action.payload)
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        [logOut.fulfilled](state) {
            state.user = {name: null, email: null}
            state.token = null
            state.isLoggedIn = false
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload
            state.isLoggedIn = true
            state.isRefreshing = false
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false
        },
    }
})

export const authReducer = authSlice.reducer