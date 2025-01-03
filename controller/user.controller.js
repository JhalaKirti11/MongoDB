import { User } from "../model/user.model.js";

import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    let {password} = req.body;
    try {
        let error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(401).json({ err: "voilate the validation rules!" });
        }

        let saltKey = bcrypt.genSaltSync(10);
        let encryptPassword = bcrypt.hashSync(password, saltKey);
        password = encryptPassword;

        let user = await User.create(req.body);
        return res.status(201).json({ message: "sign up successfuly" });

    } catch (err) {
        console.log(err);
        return res.status(501).json({ error: "server side error ", err })
    }
}

export const signin = async (req, res, next) => {
    let { email, password } = req.body;
    try {
        let found = await User.findOne({ email });
        if (found) {
            let status = bcrypt.compareSync(password, found.password);
            if (status)
                return res.status(200).json({ message: "sign in success",found,token: generateToken(found._id) });
            else
                return res.status(400).json({ err: "Invalid password" });
        }

        else
            return res.status(400).json({ err: "invalid req" });
    } catch (err) {
        return res.status(500).json({ err: "invalid req" });
    }
}

const generateToken = (userId)=>{
    let token = jwt.sign({payload: userId},"fsdfsdrereioruxvxncnv");
    return token; 
 }
