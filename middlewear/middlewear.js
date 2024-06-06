module.exports = reqFilter=(req,res,next)=>{ //middlewear
    // console.log("reqFilter");
    if(!req.query.age){
res.send("Please Provide Age")
    }
    else if(req.query.age<18){
        res.send("You can not access this page")
    }
    else{
        next()
    }
    // next();
}
