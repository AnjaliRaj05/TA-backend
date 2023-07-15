const Cart=require("../models/cart.model");
 async function addCartService(cartData) {
    const cart =await Cart.create(cartData);
        
        if(cart)
        {
            return{
                success:true,
                message:"your cart is added",
                data:cart
            }
        } else{
            return{
                success:false,
                message:"your cart is not added"
                
            }
        }
    
}

async function getAllCartService() {
    const carts =await Cart.find();
        
        if(carts)
        {
            return{
                success:true,
                message:"carts sent",
                data:carts
            }
        } else{
            return{
                success:false,
                message:"cart are not available"
                
            }
        }
    
}

async function updateCartService(cid,updatedCart) {
    const cart =await Cart.findByIdAndUpdate(cid,updatedCart,{new:true});
        
        if(cart)
        {
            return{
                success:true,
                message:"carts is updated",
                data:product
            }
        } else{
            return{
                success:false,
                message:"cart is not updated"
                
            }
        }
    
}
module.exports={addCartService,getAllCartService,updateCartService};