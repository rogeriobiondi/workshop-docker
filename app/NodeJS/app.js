var http = require('http');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://" + process.env.MONGODB + ":27017/cadastro";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("clientes", function(err, res) {
    if (err) throw err;
    console.log("Coleção clientes criada!");
    cliente = {
        "nome" : "Maria",
        "telefone" : "119111-1111"  
    }
    db.collection("clientes").insertOne(cliente, function(err, res) {
        if (err) throw err;
        console.log("Cliente inserido");
        db.close();
      });
  });
});

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  text  = "Running Node.js: " + process.versions.node + "\n"
  text += "Mongo Servers: "   + process.env.MONGODB
  response.end(text);
});

var port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0');

console.log("Server running at http://127.0.0.1:" + port + "/");