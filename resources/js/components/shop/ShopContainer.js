import React from "react"
// import "./ShopContainer.scss"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import AnimatedImage from "../components/AnimatedImage";

const ShopContainer = props => {
    if (props.products.length===0) return <div>Loading...</div>
    return (
        <div className="container shop_grid">
            {props.products.filter(e=>e.stock>0).map((e, i) => {
                return (
                    <Link
                        to={`/shop/${i}`}
                        key={i}
                        className="product_card"
                        style={{ width: "320px", height: "280px" }}>
                        <div className="thumbnail">
                            <AnimatedImage
                                src={JSON.parse(e.image)[0]}
                            />
                        </div>
                        <div className="product_card_body">
                            <p>{e.name}</p>
                            <div>
                                {e.discount < 1 ? (
                                    <React.Fragment>
                                            <span
                                                style={{
                                                    textDecoration:
                                                        "line-through"
                                                }}>
                                                ₹{e.price}
                                            </span>
                                        <p style={{ fontWeight: "bold" }}>
                                            ₹{(e.discount * e.price).toFixed(2)}
                                        </p>
                                    </React.Fragment>
                                ) : (
                                    <p style={{ fontWeight: "bold" }}>
                                        ₹{e.price}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    products:state.products
})

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopContainer)
