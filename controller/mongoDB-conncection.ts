const { MongoClient } = require("mongodb");
export const urlMongoDB =
  "mongodb://exro:exro-dev@51.124.136.209:27017/?authSource=exro-imageservice-db&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const client = new MongoClient(urlMongoDB);
const dbName = "exro-imageservice-db";
const db = client.db(dbName);
const collection = db.collection("satellite-images");

export const connectMongoDB = async () => await client.connect();

export const disconnectMongoDB = async () => await client.close();

export const findByKeyInMongoDB = async (key: string) =>
  await collection.find({ key: key }).toArray();

export const removeByKeyInMongoDB = async (key: string) =>
  await collection.deleteMany({ key: key });
