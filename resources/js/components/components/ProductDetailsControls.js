import React from "react"
import "./ProductDetailsControls.scss"

const ProductDetailsControls = ({
    changeColor,
    changeSize,
    changeQuantity,
    product
}) => {
    const {
        available_colors,
        available_sizes,
        stock,
        quantity_chosen
    } = product
    return (
        <React.Fragment>
            <div className="available_colors">
                <p>Colors:</p>
                {JSON.parse(available_colors).map((color, i) => (
                    <label key={i} class="main">
                        <input
                            defaultChecked={i === 0 ? true : false}
                            type="checkbox"
                            value={color}
                            onChange={e => changeColor(e)}
                        />
                        <span
                            class="color_span_checkbox"
                            style={{ backgroundColor: color }}
                        />
                    </label>
                ))}
            </div>
            <div className="available_sizes">
                <p>Sizes:</p>
                {JSON.parse(available_sizes).map((size, i) => (
                    <label key={i} class="main">
                        <input
                            defaultChecked={i === 0 ? true : false}
                            type="checkbox"
                            value={size}
                            onChange={e => changeSize(e)}
                        />
                        <span class="size_span_checkbox">{size}</span>
                    </label>
                ))}
            </div>
            <div className="quantity">
                <p>Quantity:</p>
                <label>
                <input
                    type="range"
                    name=""
                    id=""
                    onMouseUp={e => changeQuantity(e)}
                    defaultValue="1"
                    min="1"
                    max={stock}
                    step="1"
                />
                <span>{quantity_chosen}</span>
                </label>
            </div>
            <div className="delivery_info">Delivery Info</div>
        </React.Fragment>
    )
}

export default ProductDetailsControls
