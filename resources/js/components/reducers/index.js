import {combineReducers} from 'redux'
import productReducer from './product'
import cartReducer from './cart'
import uiReducer from './ui'

//Reducer
export const rootReducer = combineReducers({
    products:productReducer,
    cart:cartReducer,
    ui: uiReducer
})
