import { handleActions } from "redux-actions"

export default handleActions(
    {
        ADD_TO_CART: (state, action) => {
            if (!(action.payload instanceof Error)) {
                let {
                    description,
                    discount,
                    id,
                    image,
                    name,
                    price,
                    quantity_chosen,
                    sizes_chosen,
                    colors_chosen
                } = action.payload
                let products = [
                    ...state.products,
                    {
                        description,
                        discount,
                        product_id: id,
                        image,
                        name,
                        price,
                        size: sizes_chosen,
                        color: colors_chosen,
                        quantity_ordered: quantity_chosen
                    }
                ]
                return {
                    ...state,
                    products
                }
            }
        },
        REMOVE_FROM_CART: (state, action) => {
            //Test if payload returns an error
            if (!(action.payload instanceof Error)) {
                return {
                    ...state,
                    products: [state.products, ...action.payload]
                }
            }
        }
    },
    {
        products: [],
        total: 0,
        buyerInfo: {
            name: null
        }
    }
)
