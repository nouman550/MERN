const express=require('express')
const { getAllProducts,createProduct ,updateProducts,
    deleteProducts, findSingleProduct, addReviews, findReview, deleteReview} = require("../controllers/productController")
const {isAuthenticatedUser,authorizeRoles} = require('../middleware/auth')


const router=express.Router()

router.route('/products').get( getAllProducts)
//comment add by user

router.route('/admin/products/new').post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)
router.route('/admin/products/:id').put(isAuthenticatedUser,authorizeRoles("admin"),updateProducts).
delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProducts)
router.route('/products/:id').get(findSingleProduct)

router.route('/review').put(isAuthenticatedUser,addReviews)

router.route('/reviews').get(findReview).delete(isAuthenticatedUser,deleteReview)


module.exports=router