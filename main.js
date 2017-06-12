 var express=require("express");
 var app=express();
 var ejs=require("ejs");
 var bodyparser=require("body-parser");
 var mysql=require("mysql");
 var router=express.Router();
 app.set("views",__dirname+"/views")
 app.set("view engine","ejs")
 app.use(bodyparser.urlencoded({extended:false}))
 app.use(express.static(__dirname+"/static"))

 require("./config/configed.js")(app)

 app.listen("3000",function(){
 	console.log(3000)
 })

