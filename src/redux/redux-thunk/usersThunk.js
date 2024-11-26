import { fetchUsersError, fetchUsersStart, fetchUsersSuccess } from "./usersSlice"

export const fetchUsers = ()=>{
    return async (dispatch)=>{
        dispatch(fetchUsersStart())
        try {
            const response = await fetch("https://reqres.in/api/users")
            const resdata = await response.json()
            const data = resdata.data
            dispatch(fetchUsersSuccess(data))
        } catch (error) {
            dispatch(fetchUsersError(error.message))
        }
    }
}