import React, { Component } from "react"
import "./Header.scss"
import { NavLink, withRouter } from "react-router-dom"


class Header extends Component {
    render() {
        return (
            <div>
                <div className="title">theGlitterCrumb
                <span>{(/shop/.test(this.props.location.pathname))?'Shop':'Blog'}</span>
                </div>
                <div className="main_nav">
                    <NavLink
                        to="/shop"
                        className="ptr"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#FF0092",
                            opacity: 1
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
                        className="ptr"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#FF0092",
                            opacity: 1
                        }}>
                        <i className="fab fa-blogger    " />
                        <span> BLOG </span>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
