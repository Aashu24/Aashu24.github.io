var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

http.createServer(function (req, res) {
    res.end();
}).listen(8080);

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("attendance", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });