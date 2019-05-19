import React from "react"
import "./ProductDetails.scss"
import { connect } from "react-redux"
import _ from "lodash"
import { useSpring, animated } from "react-spring"
import AnimatedImage from "../components/AnimatedImage";

const ProductDetails = props => {
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

    const Sprops = useSpring({
        to: async (next, cancel) => {
            await next({ opacity: 1, color: "#ffaaee" })
            // await next({ opacity: 0, color: "rgb(14,26,19)" })
        },
        from: { opacity: 0, color: "red" }
    })

    return (
        <div className="product_details_wrapper">
            <div className="product_preview">
                <AnimatedImage src={JSON.parse(image)[0]} className='product_thumnail'/>
                <animated.div style={Sprops}>
                    <div className="product_thumnail--list">
                        {JSON.parse(image).map((e, i) => {
                            return (
                                <AnimatedImage
                                    src={e}
                                />
                            )
                        })}
                    </div>
                </animated.div>
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
                <div className="available_colors">
                    <p>Colors:</p>
                    {JSON.parse(available_colors).map((color, i) => (
                        <span key={i} style={{ backgroundColor: color }} />
                    ))}
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

//Get relevant store state
const mapStateToProps = (state, { location }) => {
    const productId = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
    )

    const product = _.find(state.productReducer.products, "id", productId)
    return {
        product
    }
}

//Dispatch relevant actions
const mapDispatchToProps = {}

//Connect to provider
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetails)
