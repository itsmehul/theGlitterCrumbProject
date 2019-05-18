import { createAction } from "redux-actions"
import axios from "axios"

//Actions and action creators
const getProducts = createAction("GET_PRODUCTS")

//Thunk action creators
export const fetchProducts = () => async dispatch => {
    try {
        const response = await axios.get("/api/products")
        dispatch(getProducts(response.data.data))
    } catch (error) {
        dispatch(getProducts(error))
    }
}
