import express from "express";
import {saveInBulk, viewProducts, viewOneProduct, updateProduct, deleteProduct} from "../controller/product.controller.js";

const router = express.Router();
router.post("/saveInBulk", saveInBulk);
router.get("/viewProducts", viewProducts);
router.get("/:id", viewOneProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/:id",deleteProduct);


export default router;
