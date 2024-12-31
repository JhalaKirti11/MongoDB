import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";


import userRouter from "./router/user.router.js";
import categoryRouter from "./router/category.router.js";
import productRouter from "./router/product.router.js";
import cartRouter from "./router/cart.router.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://127.0.0.1:27017/mongodbdemo",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log("server connected to mongodb"))
.catch((err)=> console.log("error : ", err))

app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

app.listen(3000, ()=>{
    console.log("server started...")
});
