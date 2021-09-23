const express = require("express");
let authRouter = express.Router();
const userModel=require("../models/userModel")

// routes 
authRouter
.route("/signup")
.post(setCreatedAt, signUpUser);

authRouter
  .route("/forgetPassword")
  .get(forgetPasswordGet)
  .post(forgetPasswordPost, validateEmail);


//   functions 
function setCreatedAt(re, res, next) {
  let obj = req.body;
  let length = Object.keys(obj).length;
  if (length == 0) {
    return res
      .status(400)
      .json({ message: "cannot create user is req.body is empty" });
  }
  req.body.createdAt = new Date().toISOString();
  next();
}

async function signUpUser(req, res) {
  try {
    let userObj = req.body;
    // user.push({email,name,password});
    // push all data in monogo db

    let user = await userModel.create(userObj);
    console.log(user);
    res.json({
      message: "user signed up",
      user: req.body,
    });
  } catch(err){
      console.log(err);
      res.json({message:err.message})
  }
}

function forgetPasswordGet(req, res) {
  res.sendFile("public/forgotPassword.html", { root: __dirname });
}
function forgetPasswordPost(req, res, next) {
  // res.json({
  //     message:"message Received",
  //     email:req.body.email
  // })
  next();
}
function validateEmail(req, res) {
  // here check if email is correct or not
  res.json({
    message: "message Receive",
    email: req.body.email,
  });
}

module.exports=authRouter;