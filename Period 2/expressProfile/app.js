var express = require("express");
var mysql = require("mysql");
var app = express();
var bodyParser = require("body-parser");
var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "node_db"
});
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Server running at 3000")
});

app.post("/submit", urlencodedParser, function(req, res) {
    console.log(req.body);

    connection.connect();
    connection.query("INSERT INTO user (user_name, position) VALUES ('" + req.body.name + "','" + req.body.position + "')");
    connection.end();

    res.send("Data posted to DB");
});

/*
connection.query("SELECT * from user", function(err, rows, fields) {
    if (err) throw err;
});
connection.end();
*/


/*
for (var i = 0; i < rows.length; i++) {
    console.log(rows[i].user_name);
}
//console.log(rows);
*/



