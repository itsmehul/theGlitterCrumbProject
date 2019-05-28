import { handleActions } from "redux-actions"
import _ from "lodash"

export default handleActions(
    {
        ADD_TO_CART: (state, action) => {
            if (!(action.payload instanceof Error)) {
                let {
                    description,
                    stock,
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
                        stock,
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
                // const existingProduct = _.findIndex(state.products,(product)=>action.payload.id===product.product_id)
                // if(existingProduct!==-1){
                //     console.log(state.products[existingProduct].quantity_ordered)
                //     return{
                //         ...state.products,
                //         [existingProduct]:{
                //             ...state.products[existingProduct],
                //             quantity_ordered: state.products[existingProduct].quantity_ordered++
                //         }
                //     }
                // }
                // console.log("doesn't exist")

                let total = getTotal(products)

                return {
                    ...state,
                    products,
                    total
                }
            }
        },
        REMOVE_FROM_CART: (state, action) => {
            if (!(action.payload instanceof Error)) {
                const products = state.products.filter(
                    (e, i) => i !== action.payload
                )

                let total = getTotal(products)

                return {
                    ...state,
                    products,
                    total
                }
            }
        },
        CHANGE_QUANTITY: (state, action) => {
            if (!(action.payload instanceof Error)) {
                let products = state.products
                products[action.payload.index] = {
                    ...products[action.payload.index],
                    stock:
                        products[action.payload.index].stock -
                        parseInt(action.payload.quantity),
                    quantity_ordered: parseInt(action.payload.quantity)
                }

                let total = getTotal(products)

                return {
                    ...state,
                    products,
                    total
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

function getTotal(products) {
    return products
        .reduce((a, b) => {
            let q = b.quantity_ordered

            while (q >= 1) {
                a = a + Number(b.price)
                q--
            }
            return a
        }, 0)
        .toFixed(2)
}
