module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};

process.env = Object.assign(process.env, {
  MAIN_URL: 'https://exro-dev.syncretis.com/',
});