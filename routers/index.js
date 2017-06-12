var express=require('express')
var app=express()
var router=express.Router()
var mysql=require("mysql")

var connection=require("./mysql.js")(mysql)

router.post("/index",function(req,res){
	connection.query('select * from name where no=?',[req.body.no],function(err,results){
		if(err)throw err;
		console.log(results)
		res.send(results)
	})
})
module.exports=router