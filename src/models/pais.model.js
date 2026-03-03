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