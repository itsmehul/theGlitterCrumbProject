import { handleActions } from "redux-actions"

export default handleActions(
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
    {
        products:[]
    }
)
