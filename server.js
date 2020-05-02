// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000 || process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=============================================================
//NEW TABLE INFORMATION; EMPTY ARRAY

var newTable = [];


//=============================================================





//=============================================================
//ROUTES

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "addTable.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "viewTable.html"));
  });
 



//=============================================================
//VIEW TABLES

// Displays all characters
app.get("/api/viewTable", function(req, res) {
    return res.json(characters);
  });

//=============================================================
//POST ROUTE

// Create New Characters - takes in JSON input
app.post("/api/addTable", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    characters.push(newTable);
  console.log(characters)
  
    res.json(newCharacter);
  });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });