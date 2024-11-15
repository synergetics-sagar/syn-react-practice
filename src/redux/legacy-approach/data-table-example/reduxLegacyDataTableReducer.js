import { REMOVE, SAVE } from "./reduxLegacyDataTableActions";



const reduxLegacyDataTableReducer = (users=[], action)=>{
    switch (action.type) {
        case SAVE:
            return action.payload
        case REMOVE:
            return users.filter(u=>u.id!=action.payload)
        default:
            return users
    }
}

export default reduxLegacyDataTableReducer