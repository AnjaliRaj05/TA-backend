const mongoose=require('mongoose');
const userSchema= mongoose.Schema({
    username:{
        type:'String',
        unique:true,
        required:true
    },
    name:String,
    email:String,
    mobile:String,
    password:String
})
const User=mongoose.model('User',userSchema);
module.exports = User;