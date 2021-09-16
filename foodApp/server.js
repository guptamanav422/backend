const express=require("express");
const app=express();
// const router=express.Router();
app.listen('5000',function(){
    console.log("server listening on port 5000");
})


app.use(express.json());
let user=[];
app.use(express.static('public'));

const userRouter=express.Router();
let authRouter=express.Router();
app.use('/user',userRouter);
app.use("/auth",authRouter)
// mouting in express 
userRouter
.route("/")
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('/:id')
.get(getUserById)

authRouter
.route("/signup")
.post(signUpUser)


// app.get("/",(req,res)=>{
//     res.send("home page");
// })

// app.get("/user",getUser)
function getUser(req,res){
    res.json(user);
}

// app.post("/user",postUser)
function postUser(req,res){
    user=req.body;
    // console.log(req.body);
    res.send("data has been add successfully")
}

// app.patch("/user",updateUser )
function updateUser(req,res){
    let obj=req.body;
    for(let key in obj){
        user[key]=obj[key];
    }
    res.json(user)
}


// app.delete("/user",deleteUser)
function deleteUser(req,res){
    user={};
    res.json(user);
}

// app.get("/user/:id",getUserById)
function getUserById(req,res){
    console.log(req.params);
    res.send(req.params.id);
}


function signUpUser(req,res){
    // let userDetails=req.body;
    // let name=userDetails.name;
    // let email=userDetails.email;
    // let password=userDetails.password;

    let {email,name,password}=req.body;
    user.push({email,name,password});
    console.log("user",req.body);

    res.json({
        "message":"user signed up",
        user:req.body
    })
}