 var mysql=require("mysql")
 module.exports=function(){
 	var connection=mysql.createConnection({
	 	"host":"localhost",
	 	"user":"root",
	 	"password":"1234",
	 	"port":3306,
	 	"database":"1503a"
 	})
 	connection.connect();
 	return connection 
 }
 
 