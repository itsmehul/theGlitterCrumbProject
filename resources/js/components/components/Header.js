import React, { Component } from "react"
// import "./Header.scss"
import { NavLink, withRouter } from "react-router-dom"
import Cart from "../shop/Cart"

class Header extends Component {
    render() {
        return (
            <div className="sticky">
                <header>
                    <p>
                        theGlitterCrumb
                        <span>
                            {/shop/.test(this.props.location.pathname)
                                ? "Shop"
                                : "Blog"}
                        </span>
                    </p>
                    {/shop/.test(this.props.location.pathname)
                                ? <Cart />
                                : null}
                </header>
                <nav>
                    <NavLink
                        to="/shop"
                        // className="ptr"
                        activeStyle={{
                            border: "3px solid #FF6D65",
                            backgroundColor: "#3C2C80",
                            color:'white',
                            opacity: 1,
                            borderRadius:'25px'
                        }}>
                        <i
                            className="fas fa-shopping-bag    "
                            style={{
                                fontSize: "13px",
                                position: "relative",
                                top: "-1px"
                            }}
                        />
                        <span> SHOP </span>
                    </NavLink>
                    <span />
                    <NavLink
                        exact
                        to="/blog"
                        // className="ptr"
                        activeStyle={{
                            border: "3px solid #FF6D65",
                            backgroundColor: "#3C2C80",
                            color: "white",
                            opacity: 1,
                            borderRadius:'25px'
                        }}>
                        <i className="fab fa-blogger    " />
                        <span> BLOG </span>
                    </NavLink>
                </nav>
            </div>
        )
    }
}

export default withRouter(Header)
