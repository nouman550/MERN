import React,{Fragment, useEffect,useState} from "react";
import Metadata from "./Metadata";
import { getProduct } from "../actions/productAction";
import {useDispatch,useSelector} from "react-redux";
import Product from "./Product.js";
import LoadingSpinner from "./Loader";
import "./Product.css"




const Home=()=>{
    const [isLoading, setIsLoading] = useState(true);
    const dispatch=useDispatch();
   
    const {products,error}=useSelector(state=>state.products);
   //
    useEffect(()=>{

        setTimeout(() => setIsLoading(false), 700)

    dispatch(getProduct())
    },[dispatch,error])

    return isLoading?
    <LoadingSpinner/>:(
        <Fragment>
            <Metadata title="it's fine"></Metadata>
            <div className="store">
                <p className="ecomerce">Welcome to my store
               
                </p>
                <h1>Featured Products</h1>
                <div className="Container">
                    
                {products && products.map(product=>(
                  <Product  product={product}></Product>
                ))}
                </div>
                
            </div>
        </Fragment>
    )
}

export default Home