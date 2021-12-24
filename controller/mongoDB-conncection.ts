const { MongoClient } = require("mongodb");
export const urlMongoDB =
  "mongodb://exro:exro-dev@51.124.136.209:27017/?authSource=exro-imageservice-db&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const client = new MongoClient(urlMongoDB);
const dbName = "exro-imageservice-db";

export const findByKeyInMongoDB = async (key: string) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("satellite-images");
  const elements = await collection.find({ key: key }).toArray();

  return elements;
};

export const removeByKeyInMongoDB = async (key: string) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("satellite-images");
  await collection.deleteMany({ key: key });
};
