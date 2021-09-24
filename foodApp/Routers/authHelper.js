const jwt=require("jsonwebtoken");
const { JWT_KEY } = require("../secrets");

function protectRoute(req,res,next) {
    try{
        if(req.cookies && req.cookies.login){
            console.log(req.cookies);
            let isVerify=jwt.verify(req.cookies.login,JWT_KEY)
            if(isVerify){
              next();
            }
        }
        else{
            res.json({
                message:"Operation is not allowed"
            })
        }
    }
    catch(err){
        return res.status(500).json({
            message:err.message
        })
    }
}

module.exports=protectRoute;