const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    'db_projeto', 'root', 'root',
    {
      host : "localhost",
      dialect : "mysql",
      port: "3306"
    }
);

module.exports = { Sequelize, sequelize };