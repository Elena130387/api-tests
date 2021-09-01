export const toJsonFile = (jsonData: any, name: string = "") => {
  const fs = require("fs");
  let data = JSON.stringify(jsonData);
  fs.mkdirSync("reports");
  fs.writeFileSync(`reports/performanceReport${name}.json`, data);
};
