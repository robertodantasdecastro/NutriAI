const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Goal = sequelize.define('Goal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: DataTypes.INTEGER,
  calories: DataTypes.INTEGER,
  weight: DataTypes.FLOAT,
});

module.exports = Goal;
