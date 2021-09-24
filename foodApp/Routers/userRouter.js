const express = require("express");
const userModel = require("../models/userModel");
const userRouter = express.Router();
const protectRoute=require("./authHelper")
const jsw=require("jsonwebtoken");
userRouter
  .route("/")
  .get(protectRoute,getUsers)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);

userRouter
.route('/:id')
.get(getUserById)


// functions 

  // app.get("/user",getUser)
 async function getUsers(req, res) {
    try{
        console.log("getUser Called");
        let users=await userModel.find();
        if(users){
            return res.json(users);
        }
        else {
            return res.json({
                message:"users Not Found"
            })
        }
    }
    catch(err){
        return res.json({
            message:err.message
        })
    }
}
  
  // app.post("/user",postUser)
  function postUser(req, res) {
    user = req.body;
    // console.log(req.body);
    res.send("data has been add successfully");
  }
  
  // app.patch("/user",updateUser )
  function updateUser(req, res) {
    let obj = req.body;
    for (let key in obj) {
      user[key] = obj[key];
    }
    res.json(user);
  }
  
  // app.delete("/user",deleteUser)
  function deleteUser(req, res) {
    user = {};
    res.json(user);
  }


  function getUserById(req, res) {
    console.log(req.params);
    res.send(req.params.id);
  }

  module.exports=userRouter;