const ProductModel=require("../models/product.model");
 async function addProductService(productData) {
    const product =await ProductModel.create(productData);
        
        if(product)
        {
            return{
                success:true,
                message:"your product is added",
                data:product
            }
        } else{
            return{
                success:false,
                message:"your product is not added"
                
            }
        }
    
}

async function getAllProductService() {
    const products =await ProductModel.find();
        
        if(products)
        {
            return{
                success:true,
                message:"products sent",
                data:products
            }
        } else{
            return{
                success:false,
                message:"product are not available"
                
            }
        }
    
}

async function updateProductService(id,updatedProduct) {
    const product =await ProductModel.findByIdAndUpdate(id,updatedProduct,{new:true});
        
        if(product)
        {
            return{
                success:true,
                message:"products is updated",
                data:product
            }
        } else{
            return{
                success:false,
                message:"product is not updated"
                
            }
        }
    
}
module.exports={addProductService,getAllProductService,updateProductService};