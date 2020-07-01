import React from "react"

function Product(props) {
    return (
        <div className="product-card">
            <h2>{props.product.name}</h2>
            <h4>Price: ${props.product.price}</h4>
            <p>{props.product.description}</p>
            <hr />
        </div>
    )
}

export default Product