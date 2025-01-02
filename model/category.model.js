import mongoose from "mongoose";

const mongodb = new mongoose.Schema({
    slug:{
        type: String,
        required: true,
        trim: true
    },
    name:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }
})

export const Category = mongoose.model("category", mongodb);
