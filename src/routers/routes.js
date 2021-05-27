const express = require("express");
const Student = require("../models/student");

const router = new express.Router();

router.post("/students", async(req, res)=>{
    // console.log(req.body);
    try {
        const user = new Student (req.body);
        const userData = await user.save().then(()=>{
            res.status(201).send(user);
            // console.log(req.body);
        })
    }
    catch(err){
        res.status(400).send(err);
    }
    // res.send ("hello world");
})

router.get("/students",async (req, res)=>{
    // res.send("THIS IS MY HOME PAGE");
    try {
        const stuData = await Student.find();
        res.send(stuData);
    }
    catch(err){
        res.send(err);
    }
})

router.get("/students/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const getStudent = await Student.findById(_id);
        res.send(getStudent);
    }
    catch (err){
        res.send(err);
    }
})

router.delete("/students/:id", async (req, res)=>{
    try{
        const delStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id){
            return res.status(400).send();
        }
        res.send(delStudent);
    }
    catch (err){
        res.send(500).send(err);
    }
})


router.patch("/students/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const updateData = await Student.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.send(updateData);
    }
    catch(err){
        res.status(500).send(err);
    }
    // res.send ("hello world");
})

module.exports = router