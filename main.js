require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


// criando servidor web com express
const app = express();

// configurando seridor web
console.log("Configurando servidor...");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// conectando os controllers ao servidor web
app.use("/noticias", require("./controllers/noticias_controller"));
app.use("/secretarias", require("./controllers/secretarias_controller"));

console.log("Conectando banco de dados...");
mongoose.connect(process.env.URL_BANCO).then(() => {
    console.log("Iniciando banco de dados...");
    app.listen(parseInt(process.env.PORTA_SERVIDOR), () => {
        console.log(`o servidor conectado, funcionado.`);
    });
});
 

