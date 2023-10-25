const express=require('express')

const {createComment,deleteComment, updateComment, searcComment}=require("../controllers/myController")

const {isAuthenticatedUser,authorizeRoles} = require('../middleware/auth')

const router=express.Router()

router.route('/comment').post(createComment);
router.route('/delete/comment/:id').delete(deleteComment);
router.route('/update/comment/:id').put(updateComment).get(searcComment);

module.exports=router