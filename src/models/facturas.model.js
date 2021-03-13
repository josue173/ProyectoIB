"use strict";

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var facturaSchema = Schema({
  nombre: String,
  producto: String,
  total: Number,
});

module.exports = mongoose.model("facturas", facturaSchema);
