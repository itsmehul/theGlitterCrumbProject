import React from "react";
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import ReactDOM from "react-dom";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css'
import Shop from "./shop/Shop";
import Blog from "./blog/Blog";

const Index = () => (
    <div>
        <Router>
        <Header/>
        <Route exact path="/" component={Shop} />
        <Route path="/blog" component={Blog} />
        </Router>
    </div>
);


var app = document.getElementById("app");
if (app) {
    ReactDOM.render(
        // <Provider store={store}>
            <Index />
        // </Provider>
        ,
        app
    );
}
