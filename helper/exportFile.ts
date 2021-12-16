const fs = require("fs");
export const toFile = (data: any, name: string, typeFile = "json") => {
  if (fs.existsSync(`reports`)) {
    fs.writeFileSync(`reports/${name}.${typeFile}`, data);
  } else {
    fs.mkdirSync("reports");
    fs.writeFileSync(`reports/${name}.${typeFile}`, data);
  }
};

export const toFileReferenceData = (
  data: any,
  name: string,
  typeFile = "ts"
) => {
  if (fs.existsSync(`reports`)) {
    if (fs.existsSync(`reports/referenceShapes`)) {
      fs.writeFileSync(`reports/referenceShapes/${name}.${typeFile}`, data);
    } else {
      fs.mkdirSync(`reports/referenceShapes`);
      fs.writeFileSync(`reports/referenceShapes/${name}.${typeFile}`, data);
    }
  } else {
    fs.mkdirSync("reports");
    if (fs.existsSync(`reports/referenceShapes`)) {
      fs.writeFileSync(`reports/referenceShapes/${name}.${typeFile}`, data);
    } else {
      fs.mkdirSync(`reports/referenceShapes`);
      fs.writeFileSync(`reports/referenceShapes/${name}.${typeFile}`, data);
    }
  }
};

export const createReportsDirs = () => {
  if (!fs.existsSync(`reports`)) {
    fs.mkdirSync("reports");
    if (!fs.existsSync(`reports/referenceShapes`)) {
      fs.mkdirSync(`reports/referenceShapes`);
    }
  }
};

const copyDataFromTo = (src: string, dest: string) => {
  fs.copyFile(src, dest, (err: any) => {
    if (err) throw err;
  });
};

export const addDirForReportReferenceShape = (nameDir: String) => {
  if (!fs.existsSync(`reports/referenceShapes/${nameDir}`)) {
    fs.mkdirSync(`reports/referenceShapes/${nameDir}`);
  }
};

export const copyTileToReportDir = (
  imageName: string,
  path = "defaultTiles"
) => {
  const srcReferenceImage = `helper/compareWithReference/regression_for_all_models/tiles/${path}/${imageName}.jpg`;
  const destReferenceImage = `reports/referenceShapes/${imageName}.jpg`;
  copyDataFromTo(srcReferenceImage, destReferenceImage);
};

export const removeDir = (path: string) => {
  fs.rmdirSync(`reports/referenceShapes/${path}`, { recursive: true });
};
