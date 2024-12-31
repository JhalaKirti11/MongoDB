import express from "express";
import {signIn, signUp} from "../controller/user.controller.js";
import {body} from "express-validator";

const router = express.Router();

router.post("/signUp",
    body("name","name required").notEmpty(),
    body("email","email required").notEmpty(),
    body("email", "enter valid emailId").isEmail(),
    body("password","password required").notEmpty(),
    body("contact", "10 digits in numeric form").isNumeric(),
    signUp);
router.post("/signIn", signIn);

export default router;
