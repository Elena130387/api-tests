export const toJsonFile = (data: any, name: string, typeFile = "json") => {
  const fs = require("fs");
  if (fs.existsSync(`reports`)) {
    fs.writeFileSync(`reports/${name}.json`, data);
  } else {
    fs.mkdirSync("reports");
    fs.writeFileSync(`reports/${name}.json`, data);
  }
};
