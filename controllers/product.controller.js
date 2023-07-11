const  {addProductService,getAllProductService,updateProductService}=require("../services/product.services");
 async function addProductController(req, res) {

    const newProduct =req.body;
    
    const serviceData= await addProductService(newProduct);
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

async function getAllProductController(req, res) {

    //const newProduct =req.body;
    
    const serviceData= await getAllProductService();
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
async function updateProductController(req, res) {

    //const newProduct =req.body;
    
   // const serviceData= await getAllProductService();
    // console.log(serviceData,"Service Data")
    const id =req.params.id;
    const updatedProductData = req.body;
    const serviceData= await updateProductService(id,updatedProductData);
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
module.exports = {addProductController,getAllProductController,updateProductController};