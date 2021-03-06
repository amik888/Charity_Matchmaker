module.exports = function(config) {
  // NOTE: for testing https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
  const {Sequelize} = require("sequelize");
  const express = require("express");
  const cors = require("cors");
  const app = express();

  app.use(cors(config.cors));

  // parse requests of content-type - application/json
  app.use(express.json());

  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

  const {DB, USER, PASSWORD, HOST, dialect, pool} = config.db;

  const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
    pool: {
      max: pool.max,
      min: pool.min,
      acquire: pool.acquire,
      idle: pool.idle
    }
  });

  sequelize.sync();

  // simple route
  app.get("/", (_, res) => {
    res.json({ message: "Welcome to hackathon's server application." });
  });

  require("./charity.js")(sequelize, app);

  app.use((_, res) => {
    res.sendStatus(404);
  });

  return {
    server: app,
    sequelize: sequelize
  };
};
