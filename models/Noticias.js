const mongoose = require("mongoose");

const NoticiaSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  subdescricao: String,
  autor: String,
  foto: String,
  data: {
    type: Date,
  }
});

module.exports = mongoose.model("Noticia", NoticiaSchema);
