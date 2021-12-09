//require('dotenv').config()
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testTimeout: 15000,
  reporters: ["default", "jest-junit"],
};

// process.env

process.env = Object.assign(process.env, {
  MAIN_URL: "https://exro-dev.syncretis.com",
  DEMO_URL: "https://exro-demo.syncretis.com",
});

const dotenv = require("dotenv");
dotenv.config();
