const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  ci: {
    type: String,
  },
  nombre: {
    type: String,
  },
  ap_paterno: {
    type: String,
  },
  ap_materno: {
    type: String,
  },
  fecha_nac: {
    type: String,
  },
});

module.exports = model("Usuario", userSchema);
