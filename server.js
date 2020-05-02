// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=============================================================




//=============================================================





//=============================================================
//ROUTES

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "viewTable.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "addTable.html"));
  });



//=============================================================
//VIEW TABLES

// Displays all characters
app.get("/api/viewTable", function(req, res) {
    return res.json(characters);
  });





//=============================================================



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });