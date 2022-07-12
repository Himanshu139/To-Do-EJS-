// in this to do even if you refresh the page the content stays as it is....just don't restart the server mongo is yet to come in the picture ;)
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
const ejs = require('ejs');
app.set('view engine','ejs')
app.use(express.static("public"))
var items = []; //items has to be an array or else the new value will overwrite the existing value
app.get("/",function(req,res){
    var today = new Date();
    var options = {
        weekday:'long',
        day:'numeric',
        month:'long'
    };
    var day = today.toLocaleDateString("en-US",options);
    res.render("todo",{kindOfDay:day,newListItems:items});
})
app.post("/",function(req,res){
    var inputText =req.body.newTask;
    items.push(inputText);
    res.redirect("/",)
})
app.listen(3000,function(){
    console.log("Listening to Port 3000")
})