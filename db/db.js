const config = require("../config/config.json");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_database || config.development.database,
  process.env.MYSQL_username || config.development.username,
  process.env.MYSQL_password || config.development.password,
  {
    host: "localhost",
    port: 3307,
    dialect: "mysql",
  }
);

module.exports = sequelize.authenticate().then((db) => {
  console.log(`MYSQL connected to ${config.development.database}`);
  console.log(process.env.USERNAME);
  return db;
});
