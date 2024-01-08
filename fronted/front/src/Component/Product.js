import React from "react";
 import { Link } from 'react-router-dom';
import "./Product.css"
const Product=({product})=>{

    

    return(
       <Link className="prodctCard" to={`/product/${product._id}`}>
        <img className="prod-pic" src={product.images[0].url} alt={product.name}></img>
      
        
        <div className="product-detail">
        <p>Item  : {product.name}</p> 
        <p>price : {product.price} RS</p> 
        <h1>Stock: {product.stock}</h1>
        </div>
       
        
       </Link>
    )
}

export default Product