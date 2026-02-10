const usuarioService = require('../services/usuario.service');

const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json(nuevoUsuario);
    }catch (error) {
        res.status(400).json({ error: error.message });  
    }
};

const listar = async (req, res) => {
    const usuarios = await usuarioService.listarUsuarios();
    res.json(usuarios);
};

module.exports = {
    crear,
    listar
};