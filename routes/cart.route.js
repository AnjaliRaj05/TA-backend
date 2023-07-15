const express= require('express');
const {addCartController,getAllCartController,updateCartController}=require('../controllers/cart.controller');
const router =express.Router();

router.post('/',addCartController);
router.get('/',getAllCartController);
router.put('/:id',updateCartController);
module.exports=router;