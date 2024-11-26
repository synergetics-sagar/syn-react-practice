import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        fetchUsersStart: (state)=>{
            state.loading = true;
            state.error = null;
        },
        fetchUsersSuccess: (state, action)=>{
            state.loading = false;
            state.data = action.payload
        },
        fetchUsersError: (state, action)=>{
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const {fetchUsersError, fetchUsersStart, fetchUsersSuccess} = usersSlice.actions
export default usersSlice.reducer