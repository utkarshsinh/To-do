const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const mongoose = require("mongoose");
const res = require('express/lib/response');

mongoose.connect("mongodb://localhost:27017/todo");

const trySchema = new mongoose.Schema({
    name:String
});
const item = mongoose.model("task", trySchema);

// const todo = new item({
//     name: "Create some videos"
// });
// todo.save();

app.get("/",function(req,res){
    item.find({},function(err,founditems){
        if(err){
            console.log(err);
        }
        else{
            res.render("list",{ejes: founditems});
        }
    });
});
app.post("/",function(req,res){
    const itemName = req.body.ele1;
    const todo4 = new item({
        name:itemName
    });
    todo4.save();
    res.redirect("/")
});

app.post("/delete",function(req,res){
    const checked = req.body.checkbox1;
    item.findByIdAndRemove(checked, function(err){
        if(!err){
            console.log("deleted");
            res.redirect("/");
        }
    });
});
app.listen(3000, function(){
    console.log("Todo Server Started");
});