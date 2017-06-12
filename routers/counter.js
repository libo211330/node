var express=require('express')
var app=express()
var router=express.Router()
var mysql=require("mysql")

var connection=require("./mysql.js")(mysql)

router.post("/counter",function(req,res){
	connection.query('update newspaper set num=num+1 where no=?',[req.body.no],function(err,results){
		if(err)throw err;
		res.send('ok')
	})
})
module.exports=router