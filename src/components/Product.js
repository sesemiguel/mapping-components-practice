import React from "react"

function Product(props) {
    return (
        <div className="product-card">
            <h2>{props.name}</h2>
            <h4>Price: ${props.price}</h4>
            <p>{props.description}</p>
            <hr />
        </div>
    )
}

export default Product