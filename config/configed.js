var list=require("../routers/list.js")
var login=require("../routers/login.js")
var index=require("../routers/index.js")
module.exports=function(app){
	app.get("/",login)
	app.get("/list",list)
	app.post("/index",index)
}














