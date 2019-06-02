import React, { useState, useEffect } from "react"
import { useTransition, animated, useSpring } from "react-spring"
import { connect } from "react-redux"
import AnimatedImage from "../components/AnimatedImage"
import { toggleShowModal, removeFromCart, changeQuantity } from "../actions"
import Modal from "../components/Modal"

const Cart = props => {
    useEffect(() => {
        set({ x: 1 })
        setTimeout(() => set({ x: 0 }), 500)
    }, [props.cart.products])

    console.log(props.cart.products)
    const cart = (
        <React.Fragment>
            <div className="wrapper">
                <div style={{ maxHeight: "600px", overflowY: "scroll" }}>
                    <table className="greyGridTable description">
                        <thead>
                            <tr>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.cart.products &&
                                props.cart.products.map((product, i) => (
                                    <tr key={i} style={{ height: "120px" }}>
                                        <td style={{ display: "flex" }}>
                                            <div style={{ width: "70px" }}>
                                                <AnimatedImage
                                                    src={
                                                        JSON.parse(
                                                            product.image
                                                        )[0]
                                                    }
                                                    className="cart_product--thumnail"
                                                />
                                            </div>
                                            <span className="cart_product--description">
                                                <p>{product.name}</p>
                                                <div
                                                    style={{
                                                        display: "grid",
                                                        gridTemplateColumns:
                                                            "1fr 1fr",
                                                        width: "100%"
                                                    }}>
                                                    <p>Color:</p>
                                                    <p
                                                        style={{
                                                            backgroundColor:
                                                                product
                                                                    .color[0],
                                                            width: "20px",
                                                            height: "20px",
                                                            padding: "0px",
                                                            justifySelf:"end"
                                                        }}
                                                    />
                                                    <p>Size:</p>
                                                    <p
                                                    style={{
                                                        justifySelf:"end"
                                                    }}>{product.size[0]}</p>
                                                </div>
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                <p>₹{product.price}</p>
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                <select onChange={(e)=>props.changeQuantity(e.target.value,i)}>
                                                    <option value="0">
                                                        {
                                                            product.quantity_ordered
                                                        }
                                                    </option>
                                                    {(function optionsIIFE() {
                                                        let options = []
                                                        for (
                                                            let j = 1;
                                                            j <= product.stock;
                                                            j++
                                                        ) {
                                                            if (
                                                                j ===
                                                                product.quantity_ordered
                                                            )
                                                                continue
                                                            options.push(
                                                                <option
                                                                    value={j} key={j}>
                                                                    {j}
                                                                </option>
                                                            )
                                                        }
                                                        return options
                                                    })()}
                                                </select>
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                <button
                                                    onClick={() =>
                                                        props.removeFromCart(i)
                                                    }>
                                                    remove
                                                </button>
                                                <i
                                                    className="fa fa-heart"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <form action="/api/orders" method="post">
                <input type="hidden" name="customer_id" value="1" />
                <input
                    type="hidden"
                    name="order_details"
                    value={JSON.stringify(props.cart.products)}
                />
                <div className="cart--footer">
                    <p>Total: {props.cart.total}</p>
                <button type="submit" className="btn border-fill">
                    Checkout
                </button>
                </div>

            </form>
        </React.Fragment>
    )

    const [shake, set] = useSpring(() => ({
        x: 0,
        config: { duration: 1000, mass: 1, tension: 180, friction: 12 }
    }))

    return (
        <div className="cart_wrapper">
            <div className="cart_icon" onClick={() => props.toggleShowModal()}>
                <span>VIEW CART</span>
                <animated.i
                    style={{
                        transform: shake.x
                            .interpolate({
                                range: [
                                    0,
                                    0.25,
                                    0.35,
                                    0.45,
                                    0.55,
                                    0.65,
                                    0.75,
                                    1
                                ],
                                output: [0, 10, -10, 10, -10, 10, -10, 0]
                            })
                            .interpolate(x => `rotate(${x}deg)`)
                    }}
                    className="fa fa-cart-arrow-down"
                    aria-hidden="true"
                />
            </div>
            {(props.cart.products.length!==0)?<Modal width={600}>{cart}</Modal>:<Modal width={600}><h1>Cart is empty</h1></Modal>}

        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    toggleShowModal: () => dispatch(toggleShowModal()),
    removeFromCart: i => dispatch(removeFromCart(i)),
    changeQuantity: (quantity,index) => dispatch(changeQuantity({quantity,index}))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)
