const express = require("express");
const app = express();

const serverPort = 8080;

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
})

app.get("/sobre", function(req, res){
    res.render("about");
})

app.listen(serverPort);
console.log(`Servidor rodando na porta ${serverPort}`);




// OBS: Quando se está usando EJS, os arquivos precisam estar dentro de uma pasta com nome "views" para funcionar.