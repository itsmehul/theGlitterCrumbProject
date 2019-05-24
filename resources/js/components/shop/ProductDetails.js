import React, { useState } from "react"
import "./ProductDetails.scss"
import { connect } from "react-redux"
import _ from "lodash"
import AnimatedImage from "../components/AnimatedImage"
import { _addToCart } from "../actions"
import ProductDetailsControls from "../components/ProductDetailsControls"

const ProductDetails = props => {
    const [product, updateProduct] = useState({
        ...props.product,
        colors_chosen: [JSON.parse(props.product.available_colors)[0]],
        sizes_chosen: [JSON.parse(props.product.available_sizes)[0]],
        quantity_chosen: 1
    })

    const changeSize = e => {
        let sizes_chosen
        if (_.find(product.sizes_chosen, color => color === e.target.value)) {
            sizes_chosen = product.sizes_chosen.filter(
                color => color !== e.target.value
            )
        } else {
            sizes_chosen = [...product.sizes_chosen, e.target.value]
        }
        updateProduct({
            ...product,
            sizes_chosen
        })
    }

    const changeColor = e => {
        let colors_chosen
        if (_.find(product.colors_chosen, color => color === e.target.value)) {
            colors_chosen = product.colors_chosen.filter(
                color => color !== e.target.value
            )
        } else {
            colors_chosen = [...product.colors_chosen, e.target.value]
        }
        updateProduct({
            ...product,
            colors_chosen
        })
    }

    const changeQuantity = (e) => {
        updateProduct({
            ...product,
            quantity_chosen:parseInt(e.target.value)
        })
    }

    const {
        description,
        discount,
        image,
        name,
        price,
        stock,
        available_colors,
        available_sizes
    } = props.product

    return (
        <div className="product_details_wrapper">
            <div className="product_preview">
                <AnimatedImage
                    src={JSON.parse(image)[0]}
                    className="product_thumnail"
                />
                <div className="product_thumnail--list">
                    {JSON.parse(image).map((e, i) => {
                        return <AnimatedImage key={i} src={e} />
                    })}
                </div>
                <div className="add_to_buttons_wrapper">
                    <button onClick={() => props.addToCart(product)}>
                        <i className="fa fa-cart-plus" aria-hidden="true" />
                    </button>
                    <button>
                        <i className="fa fa-heart" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <div className="product_details">
                <p className="price">₹{price}</p>
                <p className="stock">Only {stock} left in stock</p>
                <p className="name">{name}</p>
                <div className="tags">
                    <span>{"fashion".toUpperCase()}</span>
                    <span>{"food".toUpperCase()}</span>
                    <span>{"travel".toUpperCase()}</span>
                    <span>{"dining".toUpperCase()}</span>
                </div>
                <p className="description">{description}</p>
                <div className="controls" />
                <ProductDetailsControls
                    changeColor={changeColor}
                    changeSize={changeSize}
                    changeQuantity={changeQuantity}
                    product={product}
                />
            </div>
        </div>
    )
}

//Get relevant store state
const mapStateToProps = (state, { location }) => {
    const productId = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
    )

    const product = _.find(state.products, "id", productId)
    return {
        product,
        cart: state.cart
    }
}

//Dispatch relevant actions
const mapDispatchToProps = dispatch => ({
    addToCart: product => dispatch(_addToCart(product))
})

//Connect to provider
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetails)
