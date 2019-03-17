var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(express.static("views"));
app.set("views", __dirname + "/views");

app.get("/", function(request, response){
    response.render("home");
});

app.post("/", function(request, response) {
    var breakfast = request.body.breakfast;
    response.render("results", {data: breakfast});
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
 console.log("App running on port " + port);
});
