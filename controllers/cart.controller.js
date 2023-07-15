const  {addCartService,getAllCartService,updateCartService}=require("../services/cart.service");
 async function addCartController(req, res) {

    const newCart =req.body;
    
    const serviceData= await addCartService(newCart);
    // console.log(serviceData,"Service Data")
    if(serviceData.success)
    {
        res.status(200).send({
            message: serviceData.message,
            data:serviceData.data
        });

    }
    else{
        res.status(500).send({
            message: serviceData.message,
        });
    }
}

async function getAllCartController(req, res) {

    //const newProduct =req.body;
    
    const serviceData= await getAllCartService();
    // console.log(serviceData,"Service Data")
    if(serviceData.success)
    {
        res.status(200).send({
            message: serviceData.message,
            data:serviceData.data
        });

    }
    else{
        res.status(500).send({
            message: serviceData.message,
        });
    }
}
async function updateCartController(req, res) {

    //const newProduct =req.body;
    
   // const serviceData= await getAllProductService();
    // console.log(serviceData,"Service Data")
    const id =req.params.id;
    const updatedCartData = req.body;
    const serviceData= await updateCartService(id,updatedCartData);
    if(serviceData.success)
    {
        res.status(200).send({
            message: serviceData.message,
            data:serviceData.data
        });

    }
    else{
        res.status(500).send({
            message: serviceData.message,
        });
    }
}
module.exports = {addCartController,getAllCartController,updateCartController};