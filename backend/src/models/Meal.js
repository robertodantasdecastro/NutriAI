const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// PT-BR: Modelo de Refeição
// EN: Meal model
const Meal = sequelize.define('Meal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: DataTypes.INTEGER,
  name: DataTypes.STRING,
  calories: DataTypes.INTEGER,
});

module.exports = Meal;
