import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import "./index.css"
import Blog from "./blog/Blog"
import ProductDetails from "./shop/ProductDetails"
import { fetchProducts, reducer, defaultState } from "./reducers"
import thunk from 'redux-thunk'
import ShopContainer from "./shop/ShopContainer";
import { createStore, applyMiddleware } from "redux"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//Enable redux-persist to store redux state in localstorage
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer,defaultState, applyMiddleware(thunk))
let persistor = persistStore(store)
const Index = () => (
    <div>
        <Router>
            <Header />
            <Route exact path="/" render={() => <Redirect to="/shop" />} />
            <Route exact path="/shop" component={ShopContainer} />
            <Route path="/shop/:product_id" component={ProductDetails} />
            <Route path="/blog" component={Blog} />
        </Router>
    </div>
)
console.log('i run')
store.dispatch(fetchProducts())

var app = document.getElementById("app")
if (app) {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <Index />
            </PersistGate>
        </Provider>,
        app
    )
}
