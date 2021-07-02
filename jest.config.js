module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};

process.env = Object.assign(process.env, {
  MAIN_URL: 'http://exro-dev.syncretis.com/',
});