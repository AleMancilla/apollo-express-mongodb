const { Schema, model } = require("mongoose");

const materiaSchema = new Schema({
  sigla: {
    type: String,
  },
  nombre: {
    type: String,
  },
  horario: {
    type: String,
  },
});

module.exports = model("Materia", materiaSchema);
