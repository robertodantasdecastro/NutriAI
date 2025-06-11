const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Macro = sequelize.define('Macro', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: DataTypes.INTEGER,
  protein: DataTypes.INTEGER,
  carbs: DataTypes.INTEGER,
  fat: DataTypes.INTEGER,
});

module.exports = Macro;
