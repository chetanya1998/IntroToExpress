var express = require("express");
var app = express();
//"/"=> "hi there!"
app.get("/",function(req,res){
   res.send("hi there!");
});

//"/bye"=>"goodbye!"
app.get("/bye",function(req,res){
 res.send("goodbye!!");
});
//"/dog" =>"meow"
app.get("/dog",function(req,res){
console.log("someone made a request /dog");//restart the server for this it will going to show in terminal
res.send("meow!");
});
app.get("*",function(req,res){
res.send("you are a star");
});
app.get("/r/subredditName/comments/id/title",function(req,res){
var subreddit = req.params.subredditName;
res.send("welcome to subreddit!");
});
app.get("/r/subredditName/comments/:id/:title",function(req,res){
console.log(req.params);
res.send("welcome to comments page!");
});

//tell eXPRESS TO LISTEN FOR REQUEST(START SERVER)
app.listen(3000,function(){
	console.log("server has started!!");
});
//for cloud9 app.listen(process.env.port,process.env.IP);