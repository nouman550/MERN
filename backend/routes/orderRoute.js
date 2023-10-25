const express=require('express');
const router=express.Router();
const { newOrder, findOneOrder, myOrders, allOrders, updateOrders, deleteOrder } = require('../controllers/orderController');
const {isAuthenticatedUser,authorizeRoles} = require('../middleware/auth')



router.route("/order/new").post(isAuthenticatedUser,newOrder)
router.route("/order/:id").get(isAuthenticatedUser,findOneOrder);
router.route("/orders/me").get(isAuthenticatedUser,myOrders);

router.route("/admin/orders").get(isAuthenticatedUser,authorizeRoles("admin"),allOrders);
router.route("/admin/order/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateOrders).
delete(isAuthenticatedUser,authorizeRoles("admin"),deleteOrder)

module.exports=router;