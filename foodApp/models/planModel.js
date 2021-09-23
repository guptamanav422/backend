const mongoose= require("mongoose");

const planSchema=mongoose.Schema({

    id:{
        type:Number
    },
    name:{
        required:true,
        type:String
    }
    ,
    price:{
        type:Number
    },
    delivery:{
        type:Boolean
    },
    meals:{
        type:Number,
        min:1
    },
    decription:{
        type:String
    }
})

const planModel= mongoose.model("planModel",planModel);

module.exports={
    planModel
}