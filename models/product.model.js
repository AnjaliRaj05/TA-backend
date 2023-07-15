const mongoose =require('mongoose');
const productSchema = mongoose.Schema({
    pid:{
        type:String,
        unique:true,
        require:true
    },
    name:String,
    price:Number,
    rating:Number,
})
const Product=mongoose.model('Product',productSchema);
// products-collection name
//  it converts the model name provide to mongoose.model('product') in lowr case
// it make plurals - products
// now products will be our collection name 
module.exports=Product;