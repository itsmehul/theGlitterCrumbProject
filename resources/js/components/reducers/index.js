import { createAction, handleActions } from "redux-actions"
import axios from "axios"

const getProducts = createAction("GET_PRODUCTS")

export const fetchProducts = () => async dispatch => {
    try {
        const response = await axios.get("/api/products")
        dispatch(getProducts(response.data.data))
    } catch (error) {
        dispatch(getProducts(error))
    }
}

export const defaultState = {
    products: [],
    customers: [],
    order: [],
    orderDetails: [],
    user: {},
    error: ""
}

export const reducer = handleActions(
    {
        GET_PRODUCTS: (state, action) => {
            //Test if payload returns an error
            if (!(action.payload instanceof Error)) {
                return {
                    products: [...action.payload]
                }
            }
        }
    },
    defaultState
)
