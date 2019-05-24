import { createAction } from "redux-actions"
import axios from "axios"

//Actions and action creators
const getProducts = createAction("GET_PRODUCTS")
const addToCart = createAction("ADD_TO_CART")
const reduceStock = createAction("REDUCE_STOCK")

//Thunk action creators
export const fetchProducts = () => async dispatch => {
    try {
        const response = await axios.get("/api/products")
        dispatch(getProducts(response.data.data))
    } catch (error) {
        dispatch(getProducts(error))
    }
}

export const _addToCart = product => async dispatch => {
    try {
        dispatch(addToCart(product))
    } catch (error) {
        dispatch(addToCart(error))
    }
}
