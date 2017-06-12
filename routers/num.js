var express=require('express')
var app=express()
var router=express.Router()
var mysql=require("mysql")

var connection=require("./mysql.js")(mysql)

router.post("/index",function(req,res){
	connection.query('update newspaper set num=2 where no',function(err,results){
		if(err)throw err;
		
		
		res.send(results)
	})
})
module.exports=router