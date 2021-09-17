const fs = require("fs");
export const toFile = (data: any, name: string, typeFile = "json") => {
  if (fs.existsSync(`reports`)) {
    fs.writeFileSync(`reports/${name}.${typeFile}`, data);
  } else {
    fs.mkdirSync("reports");
    fs.writeFileSync(`reports/${name}.${typeFile}`, data);
  }
};
