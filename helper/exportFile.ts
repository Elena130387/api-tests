const fs = require("fs");
export const toFile = (data: any, name: string, typeFile = "json") => {
  if (fs.existsSync(`reports`)) {
    fs.writeFileSync(`reports/${name}.${typeFile}`, data);
  } else {
    fs.mkdirSync("reports");
    fs.writeFileSync(`reports/${name}.${typeFile}`, data);
  }
};

export const toFileReferenceData = (data: any, name: string) => {
  if (fs.existsSync(`reports/referenceShapes`)) {
    fs.writeFileSync(`reports/referenceShapes/${name}.ts`, data);
  } else {
    fs.mkdirSync(`reports/referenceShapes`);
    fs.writeFileSync(`reports/referenceShapes/${name}.ts`, data);
  }
};
