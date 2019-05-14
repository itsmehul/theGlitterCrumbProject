import React from "react"
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import ReactDOM from "react-dom"
import Header from "./components/Header"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import "./index.css"
import Shop from "./shop/Shop"
import Blog from "./blog/Blog"
import ProductDetails from "./shop/ProductDetails"

const Index = () => (
    <div>
        <Router>
            <Header />
            <Route exact path="/" render={() => <Redirect to="/shop" />} />
            <Route exact path="/shop" component={Shop} />
            <Route path="/shop/:product_id" component={ProductDetails} />
            <Route path="/blog" component={Blog} />
        </Router>
    </div>
)

var app = document.getElementById("app")
if (app) {
    ReactDOM.render(
        // <Provider store={store}>
        <Index />,
        // </Provider>
        app
    )
}
