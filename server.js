var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("219174_Shaikh Omair");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso Private Ltd.</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Multinational company</li>"+
                    " <li>IT Services</li>"+
                    " <li>Technology Solutions</li>"+
                    " <li>Software Training</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
