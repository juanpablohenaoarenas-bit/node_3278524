const Departamento = require('../models/departamento.model');

const crearDepartamento = async (data) => {
    return await Departamento.create(data);
};

const listarDepartamentos = async () => {
    return await Departamento.findAll();
};

//obtener por el id
const obtenerDepartamentoPorId = async (id) => {
    return await Departamento.findByPk(id);
};

//actualizar
const actualizarDepartamento = async (id, data) => {
    const departamento = await Departamento.findByPk(id);
    if (!departamento) {
        return null;
    }
    await departamento.update(data);
    return departamento;
};

//eliminar
const eliminarDepartamento = async (id) => {
    const departamento = await Departamento.findByPk(id);
    if (!departamento) {
        return null;
    }
    await departamento.destroy();
    return departamento;
};

module.exports = {
    crearDepartamento,
    listarDepartamentos,
    obtenerDepartamentoPorId,
    actualizarDepartamento,
    eliminarDepartamento
};