import { handleActions } from "redux-actions"
import _ from 'lodash'

export default handleActions(
    {
        GET_PRODUCTS: (state, action) => {
            //Test if payload returns an error
            if (!(action.payload instanceof Error)) {
                return [...action.payload]
            }
        },
        REDUCE_STOCK: (state, action) => {
            //Test if payload returns an error
            if (!(action.payload instanceof Error)) {

                console.log(_.find(state,['id',1]))

                return [...action.payload]
            }
        },

    },
    []
)
