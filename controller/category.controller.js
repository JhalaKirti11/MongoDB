import {Category} from "../model/category.model.js";

export const insertCategory = (req, res, next)=>{
    console.log(req.body);
        let insert =  Category.insertMany(req.body);
        insert.then(result=>{
            return res.status(201).json({message: "all category get saved"});
        }).catch(err=>{
            return res.status(201).json({error:"not saved", err});
        });
}



export const viewCategories =  (req, res, next)=>{
    let view =  Category.find();
    view.then(result=>{
        res.status(200).json({msg:"this is the list", result});
    }).catch(err=>{
        res.status(500).json({err:"can't fetch the data", err});
    });
}

export const deleteCategory = (req, res, next)=>{
    let {name} = req.body;
    const deleted = Category.deleteOne({"name":name});
    deleted.then(result=>{
        res.status(201).json({msg:"category deleted"});
    }).catch(err=>{
        res.status(500).json({err:"not deleted!"})
    })
}

export const findDocByID = async (req, res, next)=>{
    let id = req.params.id;
    console.log("id : "+id);
    try{
    let findID = await Category.findById({_id:id});
        res.status(201).json({msg:"found : " ,findID});
    }catch(err){
        res.status(500).json({err:"can't find!", err});
    }
}
