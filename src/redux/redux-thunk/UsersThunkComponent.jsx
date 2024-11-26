import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./usersThunk"

export default function UsersThunkComponent() {
    const dispatch = useDispatch()
    const {data, loading, error} = useSelector(state=>state.users)

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [dispatch])

    if (loading) return <h3>Loading...</h3> 
    if (error) return <h3>Error: {error}</h3>
    return (
        <div>
            <h3>Users Data</h3>
            <ul>
                {
                    data.map(user=>{
                       return  <li>{user.first_name}</li>
                    })
                }
            </ul>
        </div>
    )
}