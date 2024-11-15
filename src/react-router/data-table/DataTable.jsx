import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { remove, save } from "./dataTableSlice"
import { Link } from "react-router-dom"

export default function DataTable(){

    const dispatch = useDispatch()
    const users = useSelector(state=>state.users)
    useEffect(()=>{
        getData()
    }, [])

    async function getData(){
        const res = await fetch("https://reqres.in/api/users")
        const resdata = await res.json()
        dispatch(save(resdata.data))
    }
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=>{
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <img src={user.avatar} alt="" />
                                    </td>
                                    <td>
                                        <button><Link to={`/profile/${user.id}`}>Profile</Link></button>
                                        <br />
                                        <button onClick={()=>dispatch(remove(user.id))}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}