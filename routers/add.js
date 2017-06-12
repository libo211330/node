var express=require('express')
var app=express()
var router=express.Router()
var mysql=require("mysql")

var connection=require("./mysql.js")(mysql)

router.post("/add",function(req,res){
	var tit=req.body.tit
	var content=req.body.content
	connection.query("insert into newspaper(tit,content) values('"+tit+"','"+content+"')",function(err,data){
		
		res.send({code:0,data:"添加成功"})
		// console.log(data)
	})
})

module.exports=router
