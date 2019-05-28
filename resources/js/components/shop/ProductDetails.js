import React, { useState } from "react"
import { connect } from "react-redux"
import _ from "lodash"
import AnimatedImage from "../components/AnimatedImage"
import { _addToCart } from "../actions"
import ProductDetailsControls from "../components/ProductDetailsControls"

const ProductDetails = props => {

    const [bigImage,setbigImage] = useState(0)

    const [product, updateProduct] = useState({
        ...props.product,
        colors_chosen: [JSON.parse(props.product.available_colors)[0]],
        sizes_chosen: [JSON.parse(props.product.available_sizes)[0]],
        quantity_chosen: 1
    })

    const changeSize = e => {
        updateProduct({
            ...product,
            sizes_chosen: [e.target.value]
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
        image,
        name,
        price,
        stock,
    } = props.product

    return (
        <div className="container product_details_wrapper">
            <div className="product_preview">
                <AnimatedImage
                    src={JSON.parse(image)[bigImage]}
                    className="product_thumnail"
                />
                <div className="product_thumnail--list">
                    {JSON.parse(image).map((e, i) => {
                        return <AnimatedImage key={i} src={e} onClick={()=>setbigImage(i)} style={{cursor:'pointer'}}/>
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

const mapDispatchToProps = dispatch => ({
    addToCart: product => dispatch(_addToCart(product))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetails)
