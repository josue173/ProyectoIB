"use strict";

const express = require("express");
const adminController = require("../controllers/admin.controller");
const verification = require("../middlewares/verification");

const ventas = express.Router();

ventas.post("/obtenerAdministrador", adminController.loginUsuarios);
ventas.post(
  "/agregarProductos/:categoriaID",
  verification.ensureAuth,
  adminController.agregarProductos
);
ventas.get(
  "/buscarProductos",
  verification.ensureAuth,
  adminController.buscarProductos
);
ventas.put(
  "/editarProductos/:productoID",
  verification.ensureAuth,
  adminController.editarProductos
);
ventas.delete(
  "/eliminarProductos/:productoID",
  verification.ensureAuth,
  adminController.eliminarProductos
);
ventas.post(
  "/agregarCategoria",
  verification.ensureAuth,
  adminController.agregarCategorias
);
ventas.get(
  "/buscarCategorias",
  verification.ensureAuth,
  adminController.buscarCategorias
);
ventas.put(
  "/editarCategoria/:categoriaID",
  verification.ensureAuth,
  adminController.editarCategoria
);
ventas.delete(
  "/eliminarCategoria/:categoriaID",
  verification.ensureAuth,
  adminController.eliminarCategorias
);
ventas.post(
  "/registroUsuario",
  verification.ensureAuth,
  adminController.registroUsuarios
);
ventas.put(
  "/editarUsuario/:usuarioID",
  verification.ensureAuth,
  adminController.editarUsuario
);
ventas.delete(
  "/eliminarUsuario/:usuarioID",
  verification.ensureAuth,
  adminController.eliminarUsuarios
);
module.exports = ventas;
