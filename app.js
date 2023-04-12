const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("local"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine' , 'ejs');

app.get('/' , function(req , res){
    res.render("home");
})

app.listen(3000 , function(){
    console.log("server is running at port 3000");
})