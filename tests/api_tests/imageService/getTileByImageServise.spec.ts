import { getImageTile } from "../../../controller/imageService/image-service-controller";
import {
  connectMongoDB,
  disconnectMongoDB,
  findByKeyInMongoDB,
  removeByKeyInMongoDB,
  urlMongoDB,
} from "../../../controller/mongoDB-conncection";

const { MongoClient } = require("mongodb");
const client = new MongoClient(urlMongoDB);

describe("check serviceImage", function () {
  const keyForSearching = "38.38_-110.4_38.39_-110.41_16";
  const coord = {
    lat_nw: 38.39,
    lon_nw: -110.41,
    lat_se: 38.38,
    lon_se: -110.4,
  };
  const mapProviders = ["bing", "google"];
  beforeAll(async function () {
    await connectMongoDB();
  });
  afterAll(async function () {
    await disconnectMongoDB();
  });
  afterEach(async function () {
    await removeByKeyInMongoDB(keyForSearching);
  });

  it.each(mapProviders)(
    "successful creation of an object in the database",
    async function (provider) {
      await getImageTile(coord, provider);

      const response = await findByKeyInMongoDB(keyForSearching);

      expect(response.length).toEqual(1);
      Object.entries(coord).forEach(([key, val]) => {
        expect(response[0][key]).toEqual(val);
      });
      expect(response[0].provider).toEqual(provider);
    }
  );
});
