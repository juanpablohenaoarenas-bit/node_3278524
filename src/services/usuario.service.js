const Usuario = require('../models/usuario.model');

const crearUsuario = async (data) => {
    return await Usuario.create(data);
};

const listarUsuarios = async () => {
    return await Usuario.findAll();
};

//obtener por el id
const obtenerUsuarioPorId = async (id) => {
    return await Usuario.findByPk(id);
};

//actualizar
const actualizarUsuario = async (id, data) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        return null;
    }
    await usuario.destroy();
    return true;
};

//eliminar
const eliminarUsuario = async (id) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        return null;
    }
    await usuario.destroy();
    return usuario;
};

module.exports = {
    crearUsuario,
    listarUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario
};