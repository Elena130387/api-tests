let obj: any = {};

export const receivedIds = (id: number, name: string) => {
  obj[id] = name;
  return obj;
};
