import { DECREMENT, INCREMENT, RESET } from "./reduxLegacyCounterActions"

const initialState = {
    count: 0
}

const reduxLegacyCounterReducer = (state=initialState, action)=>{
    switch(action.type){
        case INCREMENT:
            return {...state, count: state.count+action.payload}
        case DECREMENT:
            return {...state, count: state.count-1}
        case RESET:
            return {...state, count: 0}
        default:
            return state
    }
}

export default reduxLegacyCounterReducer