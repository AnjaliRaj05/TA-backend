
const express = require('express');

const server = express();

server.use(express.json());

const products = []

// http://localhost:3000/product - POST
server.post('/product',(request,response)=>{

    const newProduct = request.body;

    newProduct.id = products.length +1;

    products.push(newProduct);

    response.status(201).send({
        message:"Product is Added",
        data:products
    })

})

// http://localhost:3000/product - GET
server.get('/product',(request,response)=>{
    response.status(200).send({
        message:products.length + " Products are sent.",
        data:products
    })
})

// http://localhost:3000/product/1 - PUT
server.put('/product/:id',(request,response)=>{
    const id = parseInt(request.params.id);

    const updatedProduct = request.body;

    const index = products.findIndex((element)=>{return element.id === id});

      if(index!==-1){

        products[index]={...products[index],...updatedProduct};

        response.status(200);

        const productData = {
          message:"Product No " + id +" is Updated successfully.",
          data:products[index]
        }

        response.send(productData);

      }else{
        response.status(404);
        const responseData = {
          message:"Product not found",
        }
        response.send(responseData)
      }
})

server.listen(3000,()=>{
    console.log("Server is running on port is 3000")
})