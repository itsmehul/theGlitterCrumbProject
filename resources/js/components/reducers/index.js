import {combineReducers} from 'redux'
import productReducer from './product'
import cartReducer from './cart'

//Reducer
export const rootReducer = combineReducers({
    products:productReducer,
    cart:cartReducer
})
