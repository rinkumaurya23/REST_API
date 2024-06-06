const express = require("express");
const reqFilter=require("./middlewear")
const app = express();
const route = express.Router();





// app.use(reqFilter)
route.use(reqFilter); //middlewear

app.get('/',(req,res)=>{
    res.send('Welcome to the Home Page')
});
route.get('/user',(req,res)=>{
    res.send("Welcome to User Page ")
});
route.get('/about',(req,res)=>{
    res.send("Welcome to About Page ")
})
app.get('/contact',(req,res)=>{
    res.send("Welcome to Contact Page ")
})

app.use('/',route)

app.listen(5000)