const express=require('express');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updateUserDetails, 
    updateUserProfile, 
    findAllUsersAdmin,
    findAllUsers,
    updateUserRole,
    deleteUserProfile} = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router=express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
router.route("/password/fogot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logoutUser);
router.route("/me").get(isAuthenticatedUser,getUserDetails);
router.route("/password/update").put(isAuthenticatedUser,updateUserDetails)
router.route("/me/update").put(isAuthenticatedUser,updateUserProfile)

router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles("admin"),findAllUsers)
router.route("/admin/user/:id").get(isAuthenticatedUser,authorizeRoles("admin"),findAllUsersAdmin).
put(isAuthenticatedUser,authorizeRoles("admin"),updateUserRole).
delete(isAuthenticatedUser,authorizeRoles("admin"),deleteUserProfile)
module.exports=router