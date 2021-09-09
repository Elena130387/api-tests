const getLinesObjectValues: any = (obj: object) =>
  obj && typeof obj === "object"
    ? Object.values(obj).map(getLinesObjectValues).flat()
    : [obj];

export const getObjectNumbers = (obj: object) =>
  getLinesObjectValues(obj).filter((el: any) => typeof el === "number");
