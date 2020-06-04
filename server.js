const express = require("express"), //importé l'express
  app = express(),
  bodyParser = require("body-parser"); //importé parser
port = process.env.PORT || 3000;

const mysql = require("mysql"); //importé mysql
//  Configurations de la connexion
const mc = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "formations"
});

// connecté avec la base données
mc.connect();

// ecouté sur le numero du port
app.listen(port);

console.log("ok.API server started on: " + port);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

var routes = require("./app/routes/approutes"); // importées les routes
routes(app); //enregistrer la route