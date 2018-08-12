var express = require("express");
var bodyParser = require("body-parser");

// var friends = require("app/data/friends.js");
// var friendsArray = friends.friends;

var app = express();
var PORT = process.argv.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// HTML and API Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});