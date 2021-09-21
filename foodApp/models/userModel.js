const mongoose=require("mongoose");
const validator= require("email-validator")
let {db_link}=require('../secrets')
mongoose.connect(db_link)
.then(function(db){
    // console.log(db)
    console.log("db Connected");
})
.catch(function(err){
    console.log(err);
})

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
            return validator.validate(this.email)
        }
    },
    createdAt:{
        type:String
    },
    password:{
        type:String,
        required:true,
        min:8,
    },
    confirmPassword:{
        type:String,
        required:true,
        min:8,
        validate:function(){
            return this.password===this.confirmPassword;
        }
    }
})

userSchema.pre('save',function(){
    this.confirmPassword=undefined;
})
const userModel=mongoose.model('userModel',userSchema);

// ( async function createUser(){
//     let user={
//         name:"Manav Gupta",
//         age:"19",
//         email:"manavgupta284@email.com",
//         password:"12345678",
//         confirmPassword:"12345678"
//     }
//     let userObj=await userModel.create(user);
//     console.log(userObj);
// }())

module.exports=userModel;