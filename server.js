// to update // method PUT
// ENdpoiint:http://localhost:3000/product/id
// request:- { name"'iphone 12 new
//     price :2335}
//Response:-
// http statuscode 200
// {message: product no 1 is updated successfully }
// data:{ }
const http = require('http');
let products=[] // empty array
const server = http.createServer((request,response) => {
response.setHeader("Content-Type", "application/json");
response.setHeader("Access-Control-Allow-Origin", "*"); // enable cors
if(request.url==='/product' && request.method==="POST")
{
   // console.log("getting url");
   // http://localhost:3000/product-POST 
   let body='';
   request.on('data',(chunk) => {
    body+=chunk;
   });
   request.on('end',() =>{
    // const productData=body

    // productData=JSON.parse(productData)
    const  productData=JSON.parse(body);
    productData.id=products.length +1;
    // now adding to array product
    products.push(productData);
    // now send some request to user
    response.statusCode=201;
    const responseData={
        message:"product Added",
        products:products

    }
  response.end(JSON.stringify(responseData))
   })

}
else if(request.url==='/product' && request.method==='GET'){
response.statusCode=200;
const responseData={
    message:products.length + "Product Sent",
    data:products
}
response.end(JSON.stringify(responseData));
}
else if(request.url.startsWith('/product') && request.method==="PUT"){

let body = "";

request.on("data", (chunk) => {
  body += chunk;
});

const id = parseInt(request.url.split('/')[2]);

request.on('end',()=>{
  const updatedProduct = JSON.parse(body);

  const index = products.findIndex((element)=>{return element.id === id});

  if(index!==-1){

    products[index]={...products[index],...updatedProduct};

    response.statusCode = 200;

    const productData = {
      message:"Product No " + id +" is Updated successfully.",
      data:products[index]
    }

    response.end(JSON.stringify(productData))

  }else{
    response.statusCode=404;
    const responseData = {
      message:"Product not found",
    }
    response.end(JSON.stringify(responseData))
  }

})





}
});
server.listen(3000,()=>{
    console.log('listening on port');
})