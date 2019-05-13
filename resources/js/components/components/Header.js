import React, { Component } from "react"
import "./Header.scss"
import { NavLink } from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="title">theGlitterCrumb</div>
                <div className="main_nav">
                    <NavLink
                        exact
                        to="/"
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
