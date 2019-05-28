import React, { useContext } from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    __RouterContext
} from "react-router-dom"
import "./index.scss"
import Blog from "./blog/Blog"
import ProductDetails from "./shop/ProductDetails"
import { rootReducer } from "./reducers"
import thunk from "redux-thunk"
import ShopContainer from "./shop/ShopContainer"
import { createStore, applyMiddleware } from "redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { fetchProducts } from "./actions"
import { useTransition, animated } from "react-spring"

const persistConfig = {
    key: "root",
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, {}, applyMiddleware(thunk))
let persistor = persistStore(store)

const Index = () => {
    //Get location from __RouterContext of react-router-dom
    const { location } = useContext(__RouterContext)

    //Define animations
    const pageTransition = useTransition(
        location,
        location => location.pathname,
        getTransition(location)
    )

    return (
        <>
            <Header />
            {/* Apply animation on relevant routes, use Switch to pass the location parameter */}
            {pageTransition.map(({ item, props, key }) => (
                <animated.div
                    key={key}
                    style={{ ...props, position: "absolute", width: "100%" }}
                    >

                    <Switch location={item}>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/shop" />}
                        />
                        <Route
                            path="/shop/:product_id"
                            component={ProductDetails}
                        />
                        <Route exact path="/shop" component={ShopContainer} />
                        <Route path="/blog" component={Blog} />
                    </Switch>
                </animated.div>
            ))}
        </>
    )
}

store.dispatch(fetchProducts())

var app = document.getElementById("app")
if (app) {
    ReactDOM.render(
        //Pass store in provider
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Index />
                </Router>
            </PersistGate>
        </Provider>,
        app
    )
}

//Conditionally create transition object based on location
function getTransition(location) {
    switch (location.pathname.match(/\//g).length) {
        case 1:
            return {
                from: { opacity: 0, transform: "translate(-100%,0)" },
                enter: { opacity: 1, transform: "translate(0,0)" },
                leave: { opacity: 0, transform: "translate(50%,0)" }
            }
        case 2:
            return {
                from: { opacity: 0, transform: "translate(100%,0)" },
                enter: { opacity: 1, transform: "translate(0,0)" },
                leave: { opacity: 0, transform: "translate(-50%,0)" }
            }
        default:
            return {
                from: { opacity: 0, transform: "translate(100%,0)" },
                enter: { opacity: 1, transform: "translate(0,0)" },
                leave: { opacity: 0, transform: "translate(-50%,0)" }
            }
    }
}
