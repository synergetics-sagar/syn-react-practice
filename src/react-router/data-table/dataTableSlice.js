import { createSlice } from "@reduxjs/toolkit";

const dataTableSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        save: (users, action) => {
            console.log(action)
            return action.payload
        },
        remove: (users, action)=>{
            return users.filter(user=>user.id!=action.payload)
        }
    }
})

export const {save, remove} = dataTableSlice.actions
export default dataTableSlice.reducer