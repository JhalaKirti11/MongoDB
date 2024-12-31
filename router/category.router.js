import express from "express";
import {insertCategory, viewCategories, deleteCategory, findDocByID} from "../controller/category.controller.js";

const router = express.Router();

router.post("/saveCategories", insertCategory);
router.get("/categoryList",viewCategories);
router.delete("/removeCategory", deleteCategory);
router.post("/:id", findDocByID);


export default router;
