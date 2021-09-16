const getObjectNumbers: any = (obj: object) =>
  obj && typeof obj === "object"
    ? Object.values(obj).flatMap(getObjectNumbers)
    : [obj];

const keyify: any = (obj: any, prefix = "") =>
  Object.keys(obj).reduce(
    (res: any, el) =>
      typeof obj[el] === "object" && obj[el] !== null
        ? [...res, ...keyify(obj[el], prefix + el + ".")]
        : [...res, prefix + el],
    []
  );

export const transformKeysObj = (
  obj: any,
  keys: any = keyify(obj),
  values: any = getObjectNumbers(obj)
) =>
  keys
    .map((el: any, index: number) =>
      el.includes("insuranceExposure") && el.includes("value")
        ? (el = "insuranceExposure_" + values[index - 1])
        : el
    )
    .map((el: any, index: number) =>
      el.includes("landUse") && el.includes("value")
        ? (el = "landUse_" + values[index - 1])
        : el
    )
    .map((el: any, index: number) =>
      el.includes("objects") && el.includes("count")
        ? (el = "objects_" + values[index + 1])
        : el
    );

export const transformToOneLevelObject = (
  obj: any,
  keys: any = transformKeysObj(obj),
  values: any = getObjectNumbers(obj)
) =>
  Object.fromEntries(
    keys
      .map((_: any, i: number) => [keys[i], values[i]])
      .filter(([key, value]: any) => typeof value === "number")
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
