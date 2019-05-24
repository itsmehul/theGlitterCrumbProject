import React, { useState, useEffect } from "react"
import "./Cart.scss"
import { useTransition, animated, useSpring } from "react-spring"
import Overlay from "../components/Overlay"
import { connect } from "react-redux"
import { _checkout } from "../actions"

const Cart = props => {
    const [showCart, toggleShowCart] = useState(false)
    const transitions = useTransition(showCart, null, {
        from: { position: "absolute", opacity: 0, width: 0, height: 0 },
        enter: { opacity: 1, width: 360, height: 640 },
        leave: { opacity: 0, width: 0, height: 0 }
    })

    //Define shake animation
    const [shake, set] = useSpring(() => ({
        x: 0,
        config: { duration: 1000, mass: 1, tension: 180, friction: 12 }
    }))
    //Initiate shake animation
    useEffect(() => {
        set({ x: 1 })
        setTimeout(() => set({ x: 0 }), 500)
    }, [props.cart.products])


    const cart = (
        <React.Fragment>
            <button onClick={() => toggleShowCart(!showCart)}>SHOP MORE</button>
            <div>
                <ul>
                    {props.cart.products &&
                        props.cart.products.map((e, i) => (
                            <li key={i}>{e.name}</li>
                        ))}
                </ul>
            </div>
            <form action="/api/orders" method="post">
                <input type="hidden" name="customer_id" value="1" />
                <input type="hidden" name="order_details" value={JSON.stringify(props.cart.products)} />
                <button type="submit">Checkout</button>
            </form>
        </React.Fragment>
    )

    return (
        <div className="cart_wrapper">
            <div className="cart_icon" onClick={() => toggleShowCart(!showCart)} style={{ backgroundColor: showCart ? "#106466" : "", color: showCart ? "white" : "", borderRadius: "45px 45px 45px 45px" }}>
                <span>VIEW CART</span>
                {/* Interpolate animation values by mapping them to a set of degree values and interpolate those values onto rotate property  */}
                <animated.i style={{
                        transform: shake.x
                            .interpolate({ range: [ 0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1 ],
                                output: [0, 10, -10, 10, -10, 10, -10, 0]
                            })
                            .interpolate(x => `rotate(${x}deg)`)
                    }}
                    className="fa fa-cart-arrow-down" aria-hidden="true" />
            </div>
            <React.Fragment>
                {transitions.map(
                    ({ item, key, props }) =>
                        item && (
                            <animated.div
                                key={key}
                                style={{
                                    ...props,
                                    position: "static",
                                    zIndex: "3"
                                }}
                                className="cart_details">
                                {cart}
                            </animated.div>
                        )
                )}
                <Overlay
                    show={showCart}
                    onClick={() => toggleShowCart(!showCart)}
                />
            </React.Fragment>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    checkout: orderDetails => dispatch(_checkout(orderDetails))
})

export default connect( mapStateToProps, mapDispatchToProps )(Cart)
