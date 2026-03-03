const departamentoService = require('../services/departamento.service');

const crear = async (req, res) => {
    try {
        const nuevoDepartamento = await departamentoService.crearDepartamento(req.body);
        res.status(201).json(nuevoDepartamento);
    }catch (error) {
        res.status(400).json({ error: error.message });  
    }
};

const listar = async (req, res) => {
    const departamentos = await departamentoService.listarDepartamentos();
    res.json(departamentos);
};

//consultar un departamento por id
const obtenerUno = async (req, res) => {
  try {
    const { id } = req.params;
    const departamento = await departamentoService.obtenerDepartamentoPorId(id);
    if (!departamento) {
        return res.status(404).json({ error: 'Departamento no encontrado' });
    }
    res.json(departamento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//actualizar
const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const departamentoActualizado = await departamentoService.actualizarDepartamento(id, req.body);
        if (!departamentoActualizado) {
            return res.status(404).json({ error: 'Departamento no encontrado' });
        }
        res.json(departamentoActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//eliminar
const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const eliminar = await departamentoService.eliminarDepartamento(id);
        if (!eliminar) {
            return res.status(404).json({ error: 'Departamento no encontrado' });
        }
        res.json({ message: 'Departamento eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crear,
    listar,
    obtenerUno,
    actualizar,
    eliminar
};