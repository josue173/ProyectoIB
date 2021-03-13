"use strict";

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var facturaSchema = Schema({
  carrito: { type: Schema.Types.ObjectId, ref: "carrito" },
  total: Number,
});

module.exports = mongoose.model("facturas", facturaSchema);
