"use strict";

const express = require("express");
const clientesCotroller = require("../controllers/clientes.controller");
const verification = require("../middlewares/verification");

const ventas = express.Router();

ventas.post(
  "/buscarProductoNombre",
  verification.ensureAuth,
  clientesCotroller.buscarProductos
);
ventas.post(
  "/buscarCategorias",
  verification.ensureAuth,
  clientesCotroller.buscarCategorias
);
ventas.get(
  "/productoCategoria/:categoriaID",
  verification.ensureAuth,
  clientesCotroller.productosCategoria
);
ventas.put(
  "/editarPerfil/:clienteID",
  verification.ensureAuth,
  clientesCotroller.editarPerfil
);
ventas.delete(
  "/eliminarPerfi/:clienteID",
  verification.ensureAuth,
  clientesCotroller.eliminarPerfil
);
ventas.post(
  "/agregarCarrito/:clienteID/:productoID",
  verification.ensureAuth,
  clientesCotroller.agregarCarrito
);
module.exports = ventas;
