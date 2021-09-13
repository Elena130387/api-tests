export const getObjectNumbers: any = (obj: object) =>
  obj && typeof obj === "object"
    ? Object.values(obj).flatMap(getObjectNumbers)
    : [obj];

export const keyify: any = (obj: any, prefix = "") =>
  Object.keys(obj).reduce((res: any, el) => {
    if (typeof obj[el] === "object" && obj[el] !== null) {
      return [...res, ...keyify(obj[el], prefix + el + ".")];
    }
    return [...res, prefix + el];
  }, []);

export const transformToOneLevelObject = (
  obj: any,
  keys: any = keyify(obj),
  values: any = getObjectNumbers(obj)
) =>
  Object.fromEntries(
    keys
      .map((_: any, i: number) => [keys[i], values[i]])
      .filter(([key, value]: any) => typeof value === "number")
  );

export const createReport = (arr: []) => {
  let report: any = {};
};
