const express=require('express')
const {isAuthenticatedUser,authorizeRoles} = require('../middleware/auth')
const { createCv } = require('../controllers/cvController')


const router=express.Router()



router.route('/admin/cv/new').post(isAuthenticatedUser,createCv)


module.exports=router