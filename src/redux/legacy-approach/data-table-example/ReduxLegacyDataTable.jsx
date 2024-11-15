import { useEffect } from "react"
import { fetchData, remove, save } from "./reduxLegacyDataTableActions"
import { connect } from "react-redux"

function ReduxLegacyDataTable({users, fetchData, remove}) {

    useEffect(()=>{
        fetchData()
    }, [fetchData])

    return (
        <div>
            
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Action</th>
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
                                        <img src={user.avatar} />
                                    </td>
                                    <td>
                                        <button onClick={()=>remove(user.id)}>DEL</button>
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
const mapStateToProps = (state)=>{
    return {
        users: state.users
    }
}

const mapDispatchToProps = {
    fetchData, remove
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxLegacyDataTable)