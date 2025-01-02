import mongoose from "mongoose";

const mongoDb = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required : true
    },
    email:{
        type: String,
        required:true,
        uniqued : true
    },
    password:{
        type: String,
        required: true
    }
})

export const User = mongoose.model("user", mongoDb);
