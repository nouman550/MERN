import React,{Fragment, useEffect,useState} from "react";
import Metadata from "./Metadata";
import { getOneProduct } from "../actions/productAction";
import {useDispatch,useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import LoadingSpinner from "./Loader";



const ProductDetails=()=>{
  const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
     console.log(id)

   const dispatch=useDispatch();
     
   const {oneProduct}=useSelector(state=>state.productDetails);
  //,loading,error
   useEffect(()=>{
    setTimeout(() => setIsLoading(false), 1000)
   dispatch(getOneProduct(id))
   },[dispatch,id])



  

   return isLoading?
   <LoadingSpinner/>:(
    <>
    <Fragment>
        <Metadata title="details"></Metadata>
        <div className="product-box">
        <p className="details">Product details </p>
        <div className="picture-box">
          
        <img className="prod-picture" src={oneProduct.images[0].url} alt={oneProduct.name}></img>
 
          <p className="cate">Category: {oneProduct.category} </p>
          <p className="price">Price:{oneProduct.price} </p>
          

         </div>

         <div className="descerption-box">
         <h1 className="describe">Description</h1>
          <p> {oneProduct.description} </p>
         </div>
         </div>

    </Fragment>
    </>
   )

}


export default ProductDetails