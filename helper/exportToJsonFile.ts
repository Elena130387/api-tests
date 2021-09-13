export const toJsonFile = (jsonData: any, name: string) => {
  const fs = require("fs");
  let data = JSON.stringify(jsonData);
  if (fs.existsSync(`reports`)) {
    fs.writeFileSync(`reports/${name}.json`, data);
  } else {
    fs.mkdirSync("reports");
    fs.writeFileSync(`reports/${name}.json`, data);
  }
};
