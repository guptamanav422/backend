const express = require("express");
const app = express();
// const router=express.Router();
app.listen("5000", function () {
  console.log("server listening on port 5000");
});

app.use(express.json());
let user = ["a1"];
app.use(express.static("public"));

// app.use((req,res,next)=>{
//     //  1 // res.send("I am A middleWare");
//     // 2
//     console.log("I am a Middleware");
//     next();
// })

const userRouter = express.Router();
let authRouter = express.Router();

// app.use((req,res,next)=>{
//     // 3
//     console.log("I am uses a  Middleware 2nd time ");
//     next();
// })

app.use("/user", userRouter);
app.use("/auth", authRouter);
// mouting in express

userRouter
  .route("/")
  .get(getUser)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);

// userRouter
// .route('/:id')
// .get(getUserById)

authRouter
.route("/signup")
.get(getSignUp)
.post(setCreatedAt, signUpUser);

authRouter
  .route("/forgetPassword")
  .get(forgetPasswordGet)
  .post(forgetPasswordPost, validateEmail);
 function getSignUp(req,res){
     res.send("Welcomes you to signup page")
 }
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


const userModel=require("./models/userModel")
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

app.get("/", (req, res) => {
  res.send("home page");
});

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

// app.get("/user/:id",getUserById)
function getUserById(req, res) {
  console.log(req.params);
  res.send(req.params.id);
}

// redirects
app.get("/user-all", (req, res) => {
  res.redirect("/user");
});

// 404 page
app.use((req, res) => {
  res.sendFile("public/404.html", { root: __dirname });
});
