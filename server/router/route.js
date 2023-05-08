const express = require('express');
const UserDetail = require("../schema/user_schema.js");
const router = express.Router();
const validator = require('validator');

const middleware = (req,res,next) =>{
    console.log(" hello middleWare");
    next();
}
router.use(middleware);

router.post("/adduser",middleware,async(req,res)=>{
    try{
        const user = req.body;
        const newUser = new UserDetail(user); 
        await newUser.save();
        res.status(201).json(newUser);

    }catch(err){
        console.log("error is :", err);
        res.status(409).json({message:err.message});
    }

});

router.get("/allusers", async(req,res)=>{
    try{
        const users = await UserDetail.find({});
        res.status(200).json(users);
    }catch(err){
        res.status(404).json({message:err.message});
    }
});

router.get("/:id", async(req, res)=> {
    console.log(req.params.id);
    try{
        // const user = await UserDetail.find({_id : req.params.id});
        const user = await UserDetail.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({message:err.message});
    }
})

router.patch("/:id", async(req,res)=> {
    let user = req.body;
    const editUser = new UserDetail(user);
    try{
        await UserDetail.updateOne({_id : req.params.id}, editUser);
        res.status(201).json(editUser);
    }catch(err){
        res.status(409).json({message : err.message});
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        await UserDetail.deleteOne({_id : req.params.id});
        res.status(201).json({message : "User Deleted Successfully!!"})
    }catch(err){
        res.status(409).json({message : err.message});
    }
})
module.exports = router;