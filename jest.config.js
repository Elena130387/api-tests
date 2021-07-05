module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["dotenv/config"],
};

process.env = Object.assign(process.env, {
  MAIN_URL: 'https://exro-dev.syncretis.com/',
});
