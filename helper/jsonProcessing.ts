const flatten = require("flat");

export const transformToOneLevelObject = (obj: any) =>
  Object.fromEntries(
    Object.entries(flatten(obj))
      .map(([key, _]: any) => [key.replace("jobSummaryDescriptor.", ""), _])
      .filter(([el, val]: any) => typeof val === "number" && el !== "ids.0")
  );

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
