import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    user: "",
    token: ""
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        },
        loginSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.user = payload.user.username
            state.token = payload.token
        },
        registerSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.user = payload.data.username
            state.token = payload.token
        }
    }
})

export const {
    fetchStart,
    fetchFail,
    loginSuccess,
    registerSuccess
} = AuthSlice.actions

export default AuthSlice.reducer