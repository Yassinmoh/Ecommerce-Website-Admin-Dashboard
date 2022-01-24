import authReducers from "./auth.reducers";
import userReducer from "./user.reducer";
import productReducer from './product.reducer'
import categoryReducer from './category.reducer'
import orderReducer from './order.reducer'
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    auth:authReducers,
    user:userReducer,
    product:productReducer,
    order:orderReducer,
    category:categoryReducer,
    
})

export default rootReducer