"use strict";

const mongoose = require("mongoose");
const ventas = require("./app");
const bcrypt = require("bcrypt-nodejs");
var Usuarios = require("./src/models/usuarios.model");
var usuariosModel = new Usuarios();

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/ventasonline", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexion exitosa a la base de datos");
    ventas.listen(3000, function () {
      usuariosModel.usuario = "Admin";
      usuariosModel.rol = "Administrador";
      Usuarios.find({ $or: [{ usuario: usuariosModel.usuario }] }).exec(
        (err, adminEncontrado) => {
          if (err) console.log("Error interno");
          if (adminEncontrado && adminEncontrado.length >= 1) {
            console.log("El administrador ya existe");
          } else {
            bcrypt.hash("123456", null, null, (err, encpitacion) => {
              usuariosModel.contrasena = encpitacion;
              usuariosModel.save((err, adminRegistrado) => {
                if (err) console.log("Error interno");
                if (adminRegistrado) {
                  console.log(adminRegistrado);
                } else {
                  console.log("Error en la peticion de registro");
                }
              });
            });
          }
        }
      );
      console.log("El servidor está corriendo en el puerto 3000");
    });
  })
  .catch((err) => console.log(err));
