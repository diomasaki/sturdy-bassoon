import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        isError: false
    },
    reducers: {
            userRegisterStart: (state) => {
                state.isFetching = true;
            },
            userRegisterSuccess: (state, action) => {
                state.currentUser = action.payload
            },
            userRegisterFailed: (state) => {
                state.isError = true
            }
    }
})

export const {userRegisterStart, userRegisterSuccess, userRegisterFailed } = userSlice.actions

export default userSlice.reducer