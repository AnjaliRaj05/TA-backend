const  {addUserService,getAllUserService,updateUserService}=require("../services/user.service");
 async function addUserController(req, res) {

    const newUser =req.body;
    
    const serviceData= await addUserService(newUser);
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

async function getAllUserController(req, res) {

    //const newProduct =req.body;
    
    const serviceData= await getAllUserService();
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
async function updateUserController(req, res) {

    //const newProduct =req.body;
    
   // const serviceData= await getAllProductService();
    // console.log(serviceData,"Service Data")
    const id =req.params.id;
    const updatedUserData = req.body;
    const serviceData= await updateUserService(id,updatedUserData);
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
module.exports = {addUserController,getAllUserController,updateUserController};