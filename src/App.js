import React from "react"
import Product from "./components/Product.js"
import products from './data/products.js'

function App(){

    const productComponents = products.map(productData => <Product key={productData.id} product={productData} />)

    return(
        <>
        {productComponents}
        </>
    )
}

export default App