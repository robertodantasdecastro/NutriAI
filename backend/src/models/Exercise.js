const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// PT-BR: Modelo de Exercício
// EN: Exercise model
const Exercise = sequelize.define('Exercise', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: DataTypes.INTEGER,
  name: DataTypes.STRING,
  caloriesBurned: DataTypes.INTEGER,
});

module.exports = Exercise;
