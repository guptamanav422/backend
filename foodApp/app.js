const express=require('express');
const app=express();
let port ='8080';
app.listen(port,function(){
    console.log(`server is listening on port ${port}`)
})

// types of request -> get post put delete 

app.get('/',(req,res)=>{
    console.log("hello from home page");
    res.send(`<h1> Hello hi  <h1>`);
    res.end();
})

let obj={
    "name":"Manavgupta"
}
app.get("/user",(req,res)=>{
    res.json(obj)
})

app.get("/home",(req,res)=>{
    res.sendFile('./index.html' ,{root:__dirname})
})