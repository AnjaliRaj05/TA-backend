const express = require("express");
const mongoose = require("mongoose");
const productRouter=require("./routes/product.route");
//const userRouter=require("./routes/user.routes")
const userRouter=require("./routes/user.routes");
const cartRouter=require("./routes/cart.route");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://anjaliraj41095:Anjali1234@cluster0.elh10cx.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("error", (err) => {
  console.log("databased not connected");
});
mongoose.connection.on("connected", (connected) => {
  console.log("database connected successfully");
});
app.use("/product",productRouter);
//pp.use("/user",userRouter);
app.use("/user",userRouter)
app.use('/cart',cartRouter);
app.use((req, res) => {
  res.status(404).send({
  message:"end point not found"
  })
})
app.listen(5000, () => {
    console.log("express server is running on port :5000");
  });
  