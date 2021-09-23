const express = require("express");
const userRouter = express.Router();

// 
userRouter
  .route("/")
  .get(getUser)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);

userRouter
.route('/:id')
.get(getUserById)


// functions 

  // app.get("/user",getUser)
function getUser(req, res) {
    res.json(user);
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