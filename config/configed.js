var list=require("../routers/list.js")
var login=require("../routers/login.js")
var index=require("../routers/index.js")
var text=require("../routers/text.js")
var add=require("../routers/add.js")
var counter=require("../routers/counter.js")

module.exports=function(app){
	app.get("/",login)
	app.get("/list",list)
	app.get("/text",text)
	app.post("/index",index)
	app.post("/add",add)
	app.post("/counter",counter)

}














