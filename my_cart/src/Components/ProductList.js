import React from "react";
import Product from "./product";

export default function ProductList(props) {
  return(
    props.productList.length>0?
    props.productList.map((product, i) => {
    return <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        DecrementQuantity={props.DecrementQuantity}
        removeItem={props.removeItem}
      
        index={i}
      />
})
:<h1>No Products Exist in the Cart</h1>
  )
}
