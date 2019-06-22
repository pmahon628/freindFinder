var express = require("express");
var path = require("path");


var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/freinds" function(req, res){
    var chosen = req.params.character;
    console.log(chosen);

    return res.json(characters[i]);


});
