const express=require("express");
const app=express();

app.listen('5000',function(){
    console.log("server listening on port 5000");
})


app.use(express.json());
let user={};

app.get("/",(req,res)=>{
    res.send("home page");
})

app.get("/user",(req,res)=>{
    res.json(user)
})

app.post("/user",(req,res)=>{
    user=req.body;
    console.log(req.body);
    res.send("data has been add successfully")
})

app.patch("/user",(req,res)=>{
    let obj=req.body;
    for(let key in obj){
        user[key]=obj[key];
    }
    res.json(user)
})

app.delete("/user",(req,res)=>{
    user={};
    res.json(user);
})

app.get("/user/:id",(req,res)=>{
    console.log(req.params);
    res.send(req.params.id);
})
