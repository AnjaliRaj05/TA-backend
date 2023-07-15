const User=require("../models/user.model");
 async function addUserService(userData) {
    const user =await User.create(userData);
        
        if(user)
        {
            return{
                success:true,
                message:"your user is added",
                data:user
            }
        } else{
            return{
                success:false,
                message:"your user is not added"
                
            }
        }
    
}

async function getAllUserService() {
    const users =await User.find();
        
        if(users)
        {
            return{
                success:true,
                message:"users sent",
                data:users
            }
        } else{
            return{
                success:false,
                message:"user are not available"
                
            }
        }
    
}

async function updateUserService(id,updatedUser) {
    const user =await User.findByIdAndUpdate(id,updatedUser,{new:true});
        
        if(user)
        {
            return{
                success:true,
                message:"users is updated",
                data:product
            }
        } else{
            return{
                success:false,
                message:"user is not updated"
                
            }
        }
    
}
module.exports={addUserService,getAllUserService,updateUserService};