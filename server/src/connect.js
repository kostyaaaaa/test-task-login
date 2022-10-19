// this file describes the connection to the db;

const sequelize = require('./sequelizeConfig');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to server has been established successfully.');
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
