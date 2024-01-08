import {ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ONE_PRODUCT_REQUEST,
    ONE_PRODUCT_SUCCESS,
    ONE_PRODUCT_FAIL,
    CV_REQUEST,
    CV_SUCCESS,
    CV_FAIL,
    CLEAR_ERROS
} 
from "../constants/productConstant"


export const productReducers=(state={products:[]},action)=>{

    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
           
        return{
            loading:true,
            products:[]
        }
        case ALL_PRODUCT_SUCCESS:
           
            return{
                loading:false,
                products:action.payload.products,
                productCount:action.payload.productCount
            }
            case ALL_PRODUCT_FAIL:
           
                return{
                    loading:false,
                    error:action.payload
                }
                                   
                case CLEAR_ERROS:
           
                return{
                    ...state,
                    error:null
                }
                       
        default:
            return state
    }
}


export const productDetailsReducers=(state={oneProduct:{}},action)=>{

    switch (action.type) {
        case ONE_PRODUCT_REQUEST:
           
        return{
            loading:true,
           ...state
        }
        case ONE_PRODUCT_SUCCESS:
           
            return{
                loading:false,
                oneProduct:action.payload.oneProduct
                
            }
            case ONE_PRODUCT_FAIL:
           
                return{
                    loading:false,
                    error:action.payload
                }
                                   
                case CLEAR_ERROS:
           
                return{
                    ...state,
                    error:null
                }
                       
        default:
            return state
    }
}




//cv creation reducer

export const newCvReducers = (state = { cv: {} }, action) => {

    switch (action.type) {
        case CV_REQUEST:

            return {
                loading: true
               
            }
        case CV_SUCCESS:

            return {
                ...state,
                loading: false,
                cv: action.payload
            }
        case CV_FAIL:

            return {
                ...state,
                loading: false,
                error: action.payload,
                cv: null
            }



        case CLEAR_ERROS:

            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

