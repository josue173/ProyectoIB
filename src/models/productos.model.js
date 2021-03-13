"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productosScheman = Schema({
  nombre: String,
  cantidad: Number,
  precio: Number,
  categoria: { type: Schema.Types.ObjectId, ref: "categorias" },
  ventas: Number,
});

module.exports = mongoose.model("productos", productosScheman);
