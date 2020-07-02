import React from "react"

class Product extends React.Component {
    render() {

        return (
            <>
                <h2>{this.props.product.name}</h2>
                <h4>Price: ${this.props.product.price}</h4>
                <p>{this.props.product.description}</p>
                <hr />
            </>
        )
    }
}

export default Product