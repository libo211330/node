var express=require("express");
var router=express.Router()
router.get("/text",function(req,res){
	res.render('text')
})
module.exports=router;