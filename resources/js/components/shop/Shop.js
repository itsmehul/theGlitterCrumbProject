import React from "react"
import { useEffect, useState } from "react"
import "./Shop.scss"
import { Link } from "react-router-dom"

const Shop = () => {
    const defaultValue = true
    const [loading, setLoading] = useState(defaultValue)
    const [products, setProducts] = useState([])

    let images = [
        {
            width: "240",
            height: "480",
            url: "https://placeimg.com/640/480/any"
        },
        {
            width: "340",
            height: "180",
            url: "https://placeimg.com/640/880/any"
        },
        {
            width: "140",
            height: "280",
            url: "https://placeimg.com/140/480/any"
        },
        {
            width: "200",
            height: "200",
            url: "https://placeimg.com/200/480/any"
        },
        {
            width: "200",
            height: "200",
            url: "https://placeimg.com/200/480/any"
        },
        {
            width: "340",
            height: "480",
            url: "https://placeimg.com/840/480/any"
        },
        {
            width: "200",
            height: "200",
            url: "https://placeimg.com/200/480/any"
        },
        {
            width: "380",
            height: "480",
            url: "https://placeimg.com/480/480/any"
        },
        {
            width: "200",
            height: "200",
            url: "https://placeimg.com/200/480/any"
        },
        {
            width: "200",
            height: "200",
            url: "https://placeimg.com/200/480/any"
        },
        {
            width: "200",
            height: "200",
            url: "https://placeimg.com/200/480/any"
        },
        {
            width: "200",
            height: "200",
            url: "https://placeimg.com/200/480/any"
        },
        { width: "240", height: "380", url: "https://placeimg.com/640/480/any" }
    ]

    useEffect(() => {
        axios
            .get("/api/products")
            .then(function(response) {
                setProducts(response.data.data)
                setLoading(false)
            })
            .catch(function(error) {
                console.log(error)
            })
    }, [])
console.log(typeof(products))
    if (loading) return <div>Loading...</div>
    return (
        <div className="shop_grid">
            {products.map((e, i) => {
                return (
                    <Link
                        to="/shop/2313"
                        key={i}
                        className="product_card"
                        style={{ width: "320px", height: "280px" }}>
                        {/* <div > */}
                        <div
                            className="thumbnail"
                            style={{
                                width: "100%",
                                height: "200px",
                                overflow: "hidden",
                                borderRadius: "5px"
                            }}>
                            <div
                                style={{ backgroundImage: `url(${e.image})` }}
                            />
                        </div>
                        <div className="product_card_body">
                            <p>{e.name}</p>
                            <span className="tag">₹{e.price}</span>
                            {/* </div> */}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Shop
