require('dotenv').config();

const { Sequelize } = require('sequelize');

const {
  DB_USER, DB_NAME, DB_PASS, HOST,
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

export default sequelize;
