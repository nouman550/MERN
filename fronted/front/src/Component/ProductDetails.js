import React, { Fragment, useEffect, useState } from "react";
import Metadata from "./Metadata";
import { getOneProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import LoadingSpinner from "./Loader";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


const ProductDetails = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { oneProduct } = useSelector((state) => state.productDetails);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
        dispatch(getOneProduct(id));
    }, [dispatch, id]);

    return isLoading ? (
        <LoadingSpinner />
    ) : (
        <Fragment>
            <Metadata title="Product Details" />
            <div className="product-box">
                <div className="picture-box">
                    <img
                        className="prod-picture"
                        src={oneProduct.images[0].url}
                        alt={oneProduct.name}
                    />
                    <p className="cate">Category: {oneProduct.category}</p>
                    <p className="price">Price: {oneProduct.price}</p>
                </div>
                <div className="description-box">
                    <h1 className="describe">Description</h1>
                    <p>{oneProduct.description}</p>
                    <Link to="/cart"> 
                        <Button>Add to Cart</Button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductDetails;
