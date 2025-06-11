const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

// PT-BR: Sincroniza modelos e inicia o servidor
// EN: Sync models and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});
