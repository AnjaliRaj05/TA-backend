const express = require("express");
const server = express();
server.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://anjaliraj41095:Anjali1234@cluster0.elh10cx.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("error", (err) => {
  console.log("databased not connected");
});
mongoose.connection.on("connected", (connected) => {
  console.log("database connected successfully");
});
// creating schema for database collection

const productSchema = new mongoose.Schema({
  pid: Number,
  name: String,
  price: Number,
  rating: Number,
});
const Product = mongoose.model("Product", productSchema);
// making post request body
server.post("/product", (request, response) => {
  const newProduct = request.body;
  Product.create(newProduct).then((product) => {
    response.status(201).send({
      message: "product is added",
      data: product,
    });
  });
});
server.get("/product", (request, response) => {
  Product.find().then((products) => {
    response.status(200).send({
      message: "Products are sent",
      data: products,
    });
  });
});
// to  update the product 
server.put("/product/:id", (request, response) => {
  const id = request.params.id;

  const updatedProduct = request.body;

  Product.findByIdAndUpdate(id, updatedProduct, { new: true })
    .then((product) => {
      if (product) {
        response.status(200).send({
          message: "Product Updated",
          data: product,
        });
      } else {
        response.status(404).send({
          message: "Product not found",
        });
      }
    })
    .catch((err) => {
      response.status(500).send({
        message: "Server failed to update the product",
      });
    });
});
server.use((request, response) => {
  response.status(404).send({
    message: "endpoint not found",
  });
});
server.listen(3000, () => {
  console.log("express server is running on port :3000");
});
