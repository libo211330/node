var express=require('express')
var app=express()
var router=express.Router()
var mysql=require("mysql")

var connection=require("./mysql.js")(mysql)

router.get("/",function(req,res){
	connection.query("select * from newspaper",function(err,data){
		res.render('login',{
			data:data
		})
	})
})

module.exports=router
