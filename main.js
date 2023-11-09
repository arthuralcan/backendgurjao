require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Criando servidor web com express
const app = express();
const router = express.Router();

// Configurando servidor web
console.log("Configurando servidor...");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conectando os controllers ao router
router.use("/noticias", require("./controllers/noticias_controller"));
router.use("/secretarias", require("./controllers/secretarias_controller"));

app.use("/", router);

console.log("Conectando banco de dados...");
mongoose.connect(process.env.URL_BANCO).then(() => {
    console.log("Iniciando banco de dados...");
    app.listen(parseInt(process.env.PORTA_SERVIDOR), () => {
        console.log(`O servidor está conectado e funcionando.`);
    });
});
