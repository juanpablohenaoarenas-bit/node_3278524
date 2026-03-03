const Pais = require('../models/pais.model');

const crearPais = async (data) => {
    return await Pais.create(data);
};

const listarPais = async () => {
    return await Pais.findAll();
};

//obtener por el id
const obtenerPaisPorId = async (id) => {
    return await Pais.findByPk(id);
};

//actualizar
const actualizarPais = async (id, data) => {
    const pais = await Pais.findByPk(id);
    if (!pais) {
        return null;
    }
    await pais.update(data);
    return pais;
};

//eliminar
const eliminarPais = async (id) => {
    const pais = await Pais.findByPk(id);
    if (!pais) {
        return null;
    }
    await pais.destroy();
    return pais;
};

module.exports = {
    crearPais,
    listarPais,
    obtenerPaisPorId,
    actualizarPais,
    eliminarPais
};