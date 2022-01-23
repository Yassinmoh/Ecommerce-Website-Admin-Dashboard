import authReducers from "./auth.reducers";
import userReducer from "./user.reducer";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    auth:authReducers,
    user:userReducer
})

export default rootReducer