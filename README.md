# Comandos
``git --version``
``node -v``
``npm -v``
``git init``
``git add .``
``git commit -m "v1"``
``git branch -M master``
``git remote add origin https://github.com/juanpablohenaoarenas-bit/node_3278524.git``
``git push -u origin master``

# 📁Estructuras profesionales de API en Node.js
api-node
    |-src **Aqui vive todo el codigo real del proyecto**
        |-config **Configuraciones globales**
        |-controllers **Controla las peticiones HTTP**
        |-middlewares **Intermediarios de seguridad y validacion**
        |-models **Representa las tablas de la base de datos**
        |-routes **Define las URLs de la API**
        |-services **Logica del negocio**
        |-untils **Funciones reutilizables**
        |-app.js **Configuracion de la aplicacion**
        |-server.js **Punto de arranque**
``npm install  dotenv sequelize mysql2 pg pg-hstore``
``npm install nodemon --save-dev``
crear .env anivel de src
```
DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=node_api
DB_USER=root
DB_PASSWORD=
PORT=3000

```
```
```
DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=node_api
DB_USER=root
DB_PASSWORD=
PORT=3000

```
📁 src/config/database.js

📁 src/server.js

configuramos a package.json ``"start": "node src/server.js"``
ejecutamos el servidor con ``npm start``

ajustamos app.js

/* const PORT=3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
}); */

module.exports = app;

📁 src/models/usuario.model.js

´´´
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }

},{
    tableName: 'usuarios',
    timestamps: true
});

module.exports = Usuario;

´´´
📁 src/services/usuario.service.js

´´´
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

´´´
📁 src/controllers/usuario.controller.js

´´´
const usuarioService = require('../services/usuario.service');

const crear = async (req, res) => {
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

//consultar un usuario por id
const obtenerUno = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await usuarioService.obtenerUsuarioPorId(id);
    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//actualizar
const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioActualizado = await usuarioService.actualizarUsuario(id, req.body);
        if (!usuarioActualizado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//eliminar
const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const eliminar = await usuarioService.eliminarUsuario(id);
        if (!eliminar) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
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

´´´

📁 src/routes/usuario.routes.js

´´´
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

router.post('/', usuarioController.crear);
router.get('/', usuarioController.listar);
router.get('/:id', usuarioController.obtenerUno);
router.put('/:id', usuarioController.actualizar);
router.delete('/:id', usuarioController.eliminar);

module.exports = router;

´´´
📁 src/models/pais.model.js

´´´
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pais = sequelize.define('Pais', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

},{
    tableName: 'paises',
    timestamps: true
});

module.exports = Pais;

´´´

📁 src/services/pais.service.js

´´´
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

´´´

📁 src/controllers/pais.controller.js

´´´
const paisService = require('../services/pais.service');

const crear = async (req, res) => {
    try {
        const nuevoPais = await paisService.crearPais(req.body);
        res.status(201).json(nuevoPais);
    }catch (error) {
        res.status(400).json({ error: error.message });  
    }
};

const listar = async (req, res) => {
    const paises = await paisService.listarPais();
    res.json(paises);
};

//consultar un pais por id
const obtenerUno = async (req, res) => {
  try {
    const { id } = req.params;
    const pais = await paisService.obtenerPaisPorId(id);
    if (!pais) {
        return res.status(404).json({ error: 'Pais no encontrado' });
    }
    res.json(pais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//actualizar
const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const paisActualizado = await paisService.actualizarPais(id, req.body);
        if (!paisActualizado) {
            return res.status(404).json({ error: 'Pais no encontrado' });
        }
        res.json(paisActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//eliminar
const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const eliminar = await paisService.eliminarPais(id);
        if (!eliminar) {
            return res.status(404).json({ error: 'Pais no encontrado' });
        }
        res.json({ message: 'Pais eliminado correctamente' });
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

´´´

📁 src/routes/pais.routes.js

´´´
const express = require('express');
const router = express.Router();
const paisController = require('../controllers/pais.controller');

router.post('/', paisController.crear);
router.get('/', paisController.listar);
router.get('/:id', paisController.obtenerUno);
router.put('/:id', paisController.actualizar);
router.delete('/:id', paisController.eliminar);

module.exports = router;

´´´

📄 src/models/departamento.model.js

´´´
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pais = require('./pais.model');   
const Departamento = sequelize.define('Departamento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paisId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pais,
            key: 'id'
        }, onDelete: 'CASCADE'
    }

},{
    tableName: 'departamentos',
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['nombre', 'paisId']
        }
    ]
});

module.exports = Departamento;

´´´

📄 src/services/departamento.service.js

´´´
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

´´´

📄 src/controllers/departamento.controller.js

´´´
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

´´´

📄 src/routes/departamento.routes.js

´´´
const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/departamento.controller');

router.post('/', departamentoController.crear);
router.get('/', departamentoController.listar);
router.get('/:id', departamentoController.obtenerUno);
router.put('/:id', departamentoController.actualizar);
router.delete('/:id', departamentoController.eliminar);

module.exports = router;

´´´
src/config/database.js

´´´
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT
    }
);
module.exports = sequelize;

´´´
src/app.js

´´´
const express = require('express');
const usuarioRoutes = require('./routes/usuario.routes');
const paisRoutes = require('./routes/pais.routes');
const departamentoRoutes = require('./routes/departamento.routes');
const app = express();

app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/departamentos', departamentoRoutes);
app.use('/api/paises', paisRoutes);

app.get('/', (req, res) => {
    res.send('🆗 API funcionando correctamente')
});

module.exports = app;

´´´
src/server.js

´´´
const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

sequelize.sync()
.then(() => {
    console.log('Conexión a la base de datos establecida');
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en HTTP://localhost:${PORT}`);
    });
})
.catch(err => console.error('Error DB;', err));

´´´