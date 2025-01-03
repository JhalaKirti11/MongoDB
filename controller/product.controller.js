import { Product } from "../model/product.model.js";

export const saveInBulk = async (req, res, next) => {
    try {
        let insert = await Product.insertMany(req.body);
        res.status(201).json({ msg: "data saved." });
    } catch (err) {
        res.status(501).json({ err: "not saved!" });
    }
}

export const viewProducts = async (req, res, next) => {
    try {
        let result = await Product.find();
        res.status(201).json({ msg: "products : ", result });
    } catch (err) {
        res.status(501).json({ err: "can't fetch the data!" })
    }
}

export const viewOneProduct = async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await Product.findOne({ id: id });
        res.status(201).json({ msg: "product", result });
    } catch (err) {
        res.status(501).json({ err: "can't fetch", err });
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await Product.deleteOne({ id: id });
        res.status(201).json({ msg: "product deleted" });
    } catch (err) {
        res.status(501).json({ err: "not deleted!" });
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await Product.updateOne({ id: id }, req.body);
        res.status(201).json({ msg: "product updated." });
    } catch (err) {
        res.status(501).json({ err: "not updated." });
    }
}
