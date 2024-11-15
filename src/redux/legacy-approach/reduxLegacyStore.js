import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxLegacyCounterReducer from "./counter-example/reduxLegacyCounterReducer"
import reduxLegacyDataTableReducer from "./data-table-example/reduxLegacyDataTableReducer";
import { thunk } from "redux-thunk";


const combinedReducers = combineReducers({
    count:reduxLegacyCounterReducer,
    users: reduxLegacyDataTableReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combinedReducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store