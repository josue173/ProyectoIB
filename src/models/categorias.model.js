"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var categoriasSchema = Schema({
  nombre: String,
});

module.exports = mongoose.model("categorias", categoriasSchema);
