let mongoose=require("mongoose");
let db_Link='mongodb+srv://ManavGupta:DXiL2HMFxpTQDovM@cluster0.o8t3o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(db_Link)
.then(function(){
    console.log("db Connected");
})
.catch(function(err){
    console.log(err);
})