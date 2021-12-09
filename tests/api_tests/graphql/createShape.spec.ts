import { createGqlShape } from "../../../controller/graphql/shape";
import { simpleCoordinates } from "../../../requests/graphql/createShape";

describe("create new graphql shape", function () {
  let shapeId: number;

  it("successfully create shape", async function () {
    const response = await createGqlShape(simpleCoordinates);
    const { id, __typename } = response.data.calculate;
    shapeId = id;

    expect(id.length).toBeGreaterThan(0);
    expect(__typename).toEqual("Shape");
  });
});
