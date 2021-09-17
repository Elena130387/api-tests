const flatten = require("flat");

export const transformToOneLevelObject = (obj: any) => {
  obj = Object.entries(flatten(obj));
  return Object.fromEntries(
    obj
      .map(([el, val]: any, index: any) =>
        el.includes("insuranceExposure") && el.includes("value")
          ? ["insuranceExposure_" + obj[index - 1][1], val]
          : [el, val]
      )
      .map(([el, val]: any, index: number) =>
        el.includes("landUse") && el.includes("value")
          ? ["landUse_" + obj[index - 1][1], val]
          : [el, val]
      )
      .map(([el, val]: any, index: number) =>
        el.includes("objects") && el.includes("count")
          ? ["objects_" + obj[index + 1][1], val]
          : [el, val]
      )
      .filter(([_, val]: any) => typeof val === "number")
  );
};

export const getListWithErorrsValue = (
  objReferenceData: any,
  objReceivedData: any,
  percentError: number
) => {
  objReferenceData = transformToOneLevelObject(objReferenceData);
  objReceivedData = transformToOneLevelObject(objReceivedData);
  return Object.entries(objReferenceData).filter(
    ([key, value]: any) =>
      Math.abs(value - objReceivedData[key]) > (value * percentError) / 100
  );
};
