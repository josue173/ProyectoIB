"use strict";

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usuariosSchema = Schema({
  usuario: String,
  contrasena: String,
  rol: String,
});

module.exports = mongoose.model("usuarios", usuariosSchema);

/*
  carrito: [
    {
      productos: [],
      cantidad: Number,
      IDcliente: { type: Schema.Types.ObjectId, ref: "Usuarios" },
    },
  ],
*/
