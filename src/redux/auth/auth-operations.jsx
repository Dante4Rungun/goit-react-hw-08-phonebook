import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/"

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", credentials)
        setAuthHeader(response.data.token)
        console.log(response.data)
        return response.data
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
    })

export const logIn = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", credentials)
            setAuthHeader(response.data.token)
            console.log(response.data)
            return response.data
        }
        catch (err) {
            thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const logOut = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout")
            clearAuthHeader()
        }
        catch (err) {
            thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const persistedToken = state.auth.token
        if (persistedToken === null) {
            thunkAPI.rejectWithValue("Unable to fetch user")
        }
        try {
            setAuthHeader(persistedToken);
            const response = await axios.post("/users/current")
            console.log(response.data)
            return response.data
        }
        catch(err) {
            thunkAPI.rejectWithValue()
        }
    }
)