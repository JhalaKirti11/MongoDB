import mongoose from "mongoose";

const mongodb = new mongoose.Schema({
    id:Number,
    title: String,
    description:String,
    category:String,
    price:Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    tags: [],
    brand: String,
    weight: Number,
    warrantyInformation: String,
    shippingInformation: String,
    availabilityStatus:  String,
    reviews: [],
    returnPolicy: String,
    images:[],
    thumbnails: String   
});

export const Product = mongoose.model("product", mongodb);
