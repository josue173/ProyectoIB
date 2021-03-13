"use strict";

const jwt = require("jwt-simple");
const moment = require("moment");
const key = "VentasOnLine";

exports.createToken = function (usuario) {
  var payload = {
    sub: usuario._id,
    nombre: usuario.nombre,
    rol: usuario.rol,
    iat: moment().unix(),
    exp: moment().day(30, "days").unix(),
  };
  return jwt.encode(payload, key);
};
