import React from "react"
import "./ProductDetails.scss"
import { connect } from "react-redux"
import _ from "lodash"

const ProductDetails = props => {
    // console.log(props.product)

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
                <div
                    className="product_thumnail"
                    style={{ backgroundImage: `url(${JSON.parse(image)[0]})` }}
                />
                <div className="product_thumnail--list">
                    {JSON.parse(image).map((e, i) => {
                        return <span style={{ backgroundImage: `url(${e})` }} />
                    })}
                </div>
            </div>
            <div className="product_details">
                <p className="price">₹{price}</p>
                <p className="stock">Only {stock} left in stock</p>
                <p className="name">{name}</p>
                <div className="tags">
                    <span>{'fashion'.toUpperCase()}</span>
                    <span>{'food'.toUpperCase()}</span>
                    <span>{'travel'.toUpperCase()}</span>
                    <span>{'dining'.toUpperCase()}</span>
                </div>
                <p className="description">{description}</p>
                <div className="available_colors">
                    <p>Colors:</p>
                    {JSON.parse(available_colors).map((color, i) => {
                        console.log(color)
                        return (
                            <span key={i} style={{ backgroundColor: color }} />
                        )
                    })}
                </div>
                <div className="available_sizes">
                    <p>Sizes:</p>
                    {JSON.parse(available_sizes).map(size => (
                        <span>{size}</span>
                    ))}
                </div>
                <div className="delivery_info">Delivery Info</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, { location }) => {
    const productId = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
    )
    console.log(state)

    const product = _.find(state.products, "id", productId)
    console.log(product)
    return {
        product
    }
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetails)