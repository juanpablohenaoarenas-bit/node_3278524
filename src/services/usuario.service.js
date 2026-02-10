const Usuario = require('../models/usuario.model');

const crearUsuario = async (data) => {
    return await Usuario.create(data);
};

const listarUsuarios = async () => {
    return await Usuario.findAll();
};
module.exports = {
    crearUsuario,
    listarUsuarios
};