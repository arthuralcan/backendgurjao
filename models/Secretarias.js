const mongoose = require("mongoose");

const SecretariaSchema = new mongoose.Schema({
  nome: String,
  funcao: String,
  descricao: String,
  foto: String,
  email: String,
  telefone: String

});

module.exports = mongoose.model("Secretaria", SecretariaSchema);
