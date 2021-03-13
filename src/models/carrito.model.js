"use strict";

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var carritoSchema = Schema({
  cliente: { type: Schema.Types.ObjectId, ref: "Usuarios" },
  productos: { type: Schema.Types.ObjectId, ref: "productos" },
  cantidad: Number,
  total: Number,
});

module.exports = mongoose.model("carrito", carritoSchema);
