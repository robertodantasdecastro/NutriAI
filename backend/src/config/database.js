require('dotenv').config();
const { Sequelize } = require('sequelize');

// PT-BR: Configuração do banco PostgreSQL
// EN: PostgreSQL database configuration
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

module.exports = sequelize;
