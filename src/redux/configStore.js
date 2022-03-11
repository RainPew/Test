import { combineReducers, createStore, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import loginHomeReducer from "./../page/Login/reducer"
import getHomeReducer from "./../page/Get/reducer"
import createHomeReducer from "../page/AddMenber/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    loginHomeReducer,
    getHomeReducer,
    createHomeReducer
})
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
export default store