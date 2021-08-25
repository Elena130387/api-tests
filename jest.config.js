//require('dotenv').config()
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};

// process.env

process.env = Object.assign(process.env, {
  MAIN_URL: 'https://exro-dev.syncretis.com',
  DEMO_URL: 'http://exro-demo.syncretis.com'
});
