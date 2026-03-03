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