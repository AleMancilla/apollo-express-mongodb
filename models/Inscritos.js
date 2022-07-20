const { Schema, model } = require("mongoose");

const inscritosSchema = new Schema({
  ci_usuario: {
    type: String,
  },
  sigla_materia: {
    type: String,
  },
});

module.exports = model("Inscritos", inscritosSchema);
