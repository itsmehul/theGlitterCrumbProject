import React from "react"
import { useEffect } from "react"

const Shop = () => {
    useEffect(() => {
        axios
            .get("/api/products")
            .then(function(response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })
    }, [])

    return <div>Shop</div>
}

export default Shop
