export const arrayAverage = (array: [any]) =>
  array.reduce((x: number, y: number) => x + y) / array.length;
