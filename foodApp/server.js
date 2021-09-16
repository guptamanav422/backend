const express=require("express");
const app=express();
// const router=express.Router();
app.listen('5000',function(){
    console.log("server listening on port 5000");
})


app.use(express.json());
let user={};


const userRouter=express.Router();
app.use('/user',userRouter);
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
